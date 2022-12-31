import { styled } from "../../theme/global"
import { Column, Row } from "../common/Layouts"
import { RosterYearText } from "./page"
import { Player } from "./Player"
import { getPlayerBios } from "./PlayerBioRepository"
import RosterCard from "./RosterCard"

export default function RosterGrid({ year, onPopupPlayer }: { year: number, onPopupPlayer: (p: Player) => void }) {
    const playerBios: Player[] = getPlayerBios(year)

    const rosterCards = playerBios.map(p => (<RosterCard player={p} year={year} onMore={() => onPopupPlayer(p)} />))
    return (
        <Column gap="32px" align="stretch">
            <Row justify="space-between">
                <RosterYearText year={year} />
            </Row>
            <RosterGridBase>
                {rosterCards}
            </RosterGridBase>
        </Column>
    )
}

const RosterGridBase = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '16px',
    rowGap: '16px',
})