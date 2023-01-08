import { Player } from "./Player";
import Image from "next/image";
import { BookmarkIcon, CalendarIcon, Cross1Icon, HomeIcon, Pencil2Icon, PersonIcon, PilcrowIcon, StackIcon } from "@radix-ui/react-icons";
import { styled } from "../../theme/global";
import * as Dialog from "@radix-ui/react-dialog";
import { Column, Row } from "../common/Layouts";
import { NumberCircle, RosterNickname } from "./RosterComponents";
import InfoItem from "./InfoItem";
import { BioQuestion } from "./BioQuestion";
import Text from "../common/Text";

export default function RosterPopup({ player, year, onClose }: { player: Player, year: number, onClose: () => void }) {
    return (
        <ModalWrapper>
            <ModalContent>
                <div className="popup-image-container">
                    <Image
                        src={`/roster/${year}/pics/${player.id}.jpg`}
                        alt={`Picture of ${player.name}`}
                        sizes="100vw"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <PopupClose onClick={e => onClose()}>
                        <Cross1Icon />
                    </PopupClose>
                </div>
                <PopupBottom player={player} />
            </ModalContent>
        </ModalWrapper>
    )
}

const ModalWrapper = styled('div', {
    width: 'calc(100% - 10vh)',
    // width: '100%',
    height: 'calc(100% - 10vh)',
    // height: '100%',
    position: "fixed",
    top: '0',
    padding: '5vh',
})

const ModalContent = styled(Dialog.Content, {
    borderRadius: '16px',
    padding: '0px',
    border: 'none',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'relative',
    height: '90vh',
    margin: '0 auto',
    maxWidth: '85ch',
    backgroundColor: '$gray1',
    // top: '0',
})

const PopupClose = styled('div', {
    borderRadius: '32px',
    backgroundColor: '$blackA11',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',

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
                <InfoItem icon={(<StackIcon />)} text={player.highschool} />
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