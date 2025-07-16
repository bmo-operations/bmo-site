import { CalendarIcon, HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../common/theme/global";
import InfoItem from "./InfoItem";
import { Player } from "./Player";
import { NumberChip, RosterNickname } from "./RosterComponents";
import { Text } from "../common/theme/global";
import { styled, Column, Row } from "styled-system/jsx";

export default function RosterCard({ player, year, onMore }: { player: Player, year: number, onMore: () => void }) {
    return (
        <RosterCardBase align="stretch">
            <Image
                src={`/content/roster/${year}/${player.id}.jpg`}
                alt={`Picture of ${player.name}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto', aspectRatio: "16/9" }}
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
                <Button onClick={e => onMore()}><Text style="subtitle" color="secondary">More</Text></Button>
            </Column>
        </RosterCardBase>
    )
}

const RosterCardBase = styled(Column, {
    base: {
        width: '100%',
        borderRadius: '24px',
        border: '1px solid token(colors.gray.a.5)',
        backgroundColor: 'white',
        overflow: 'hidden',
    }
})

const RosterPlaceholder = styled('div', {
    base: {
        width: '100%',
        aspectRatio: "16/9",
        backgroundColor: 'token(colors.gray.a.3)',
    }
})