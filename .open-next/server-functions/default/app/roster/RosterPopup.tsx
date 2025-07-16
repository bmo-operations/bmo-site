import { Player } from "./Player";
import Image from "next/image";
import { CalendarIcon, HomeIcon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons";
import { styled, Column, Row } from "styled-system/jsx";
import { NumberCircle, RosterNickname } from "./RosterComponents";
import InfoItem from "./InfoItem";
import { BioQuestion } from "./BioQuestion";
import { Text } from "../common/theme/global";
import {ModalContent, ModalWrapper, PopupClose} from "../common/Dialog";
import { GraduationCap, X } from "phosphor-react";

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
                        <X />
                    </RosterPopupClose>
                </div>
                <PopupBottom player={player} />
            </ModalContent>
        </ModalWrapper>
    )
}

const RosterPopupClose = styled(PopupClose, {
    base: {
        position: 'absolute',
        top: '16px',
        left: '16px',
    }
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
            <Text style="body" color="secondary" css={{ whiteSpace: "pre-wrap" }}>{bioQuestion.answer}</Text>
        </Column>
    )
}