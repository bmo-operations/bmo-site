import { CalendarIcon, HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button, styled } from "../common/theme/global";
import { Column, Row } from "../common/Layouts";
import InfoItem from "./InfoItem";
import { Player } from "./Player";
import { NumberChip, RosterNickname } from "./RosterComponents";
import Text from "../common/Text";

export default function RosterCard({ player, year, onMore }: { player: Player, year: number, onMore: () => void }) {
    return (
        <RosterCardBase align="stretch">
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/content/roster/${year}/${player.id}.jpg`}
                alt={`Picture of ${player.name}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
            />
            <Column padding='16px' gap='16px' align="stretch" style={{ height: "100%" }}>
                <Row gap='16px' justify="space-between" align="center">
                    <Column>
                        <Text style="subtitle">{player.name}</Text>
                        <RosterNickname nickname={player.nickname} />
                    </Column>
                    <NumberChip number={player.number} />
                </Row>
                <Column gap="8px" style={{ flexGrow: "1" }}>
                    <InfoItem icon={(<CalendarIcon />)} text={`Class of ${player.class}`} />
                    <InfoItem icon={(<HomeIcon />)} text={`${player.hometown}`} />
                </Column>
                <Button size={{ '@initial': 'mobile', '@md': 'desktop' }} onClick={e => onMore()}><Text style="subtitle" color="secondary">More</Text></Button>
            </Column>
        </RosterCardBase>
    )
}

const RosterCardBase = styled(Column, {
    width: '100%',
    borderRadius: '24px',
    border: '1px solid $gray7',
    backgroundColor: 'white',
    overflow: 'hidden',
})