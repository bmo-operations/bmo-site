import { Player } from "./Player";
import Image from "next/image";
import { BookmarkIcon, CalendarIcon, Cross1Icon, HomeIcon, Pencil2Icon, PersonIcon, PilcrowIcon, StackIcon } from "@radix-ui/react-icons";
import { styled } from "../common/theme/global";
import { Column, Row } from "../common/Layouts";
import { NumberCircle, RosterNickname } from "./RosterComponents";
import InfoItem from "./InfoItem";
import { BioQuestion } from "./BioQuestion";
import Text from "../common/Text";
import {ModalContent, ModalWrapper, PopupClose} from "../common/Dialog";
import { GraduationCap } from "phosphor-react";

export default function RosterPopup({ player, year, onClose }: { player: Player, year: number, onClose: () => void }) {
    return (
        <ModalWrapper>
            <ModalContent>
                <div className="popup-image-container">
                    <Image
                        src={`/content/roster/${year}/${player.id}.jpg`}
                        alt={`Picture of ${player.name}`}
                        sizes="100vw"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <RosterPopupClose onClick={e => onClose()}>
                        <Cross1Icon />
                    </RosterPopupClose>
                </div>
                <PopupBottom player={player} />
            </ModalContent>
        </ModalWrapper>
    )
}

const RosterPopupClose = styled(PopupClose, {
    position: 'absolute',
    top: '16px',
    left: '16px',
})

function PopupBottom({ player }: { player: Player }) {
    return (
        <Column padding="24px" gap="32px" align="stretch">
            <Row gap="16px" justify="space-between" align="center">
                <Column>
                    <Text style="h2">{player.name}</Text>
                    <RosterNickname nickname={player.nickname} />
                </Column>
                <NumberCircle number={player.number} />
            </Row>
            <Column gap="16px">
                <Text style="subtitle" color="secondary">Info</Text>
                <InfoItem icon={(<PersonIcon />)} text={player.height} />
                <InfoItem icon={(<CalendarIcon />)} text={`Class of ${player.class}`} />
                <InfoItem icon={(<Pencil2Icon />)} text={player.concentration} />
                <InfoItem icon={(<HomeIcon />)} text={player.hometown} />
                <InfoItem icon={(<GraduationCap />)} text={player.highschool} />
            </Column>
            <Column gap="16px">
                <Text style="subtitle" color="secondary">Bio</Text>
                {player.bioQuestions.map(bq => <BioQuestionItem bioQuestion={bq} />)}
            </Column>
        </Column>
    )
}

function BioQuestionItem({ bioQuestion }: { bioQuestion: BioQuestion }) {
    return (
        <Column gap="4px">
            <Text style="subtitle">{bioQuestion.question}</Text>
            <Text style="body" color="secondary">{bioQuestion.answer}</Text>
        </Column>
    )
}