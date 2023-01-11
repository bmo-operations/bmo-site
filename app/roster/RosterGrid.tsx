import { styled } from "../../theme/global"
import { Column, Row } from "../common/Layouts"
import { Player } from "./Player"
import { getPlayerBios } from "./PlayerBioRepository"
import RosterCard from "./RosterCard"
import { RosterYearText } from "./RosterComponents"

export default function RosterGrid({ year, onPopupPlayer }: { year: number, onPopupPlayer: (p: Player) => void }) {
    const playerBios: Player[] = getPlayerBios(year)

    const rosterCards = playerBios.map(p => (<RosterCard key={p.id} player={p} year={year} onMore={() => onPopupPlayer(p)} />))
    return (
        <Column gap="32px" gapMobile="16px" align="stretch">
            <Row justify="space-between">
                <RosterYearText year={year} />
            </Row>
            <RosterGridBase columns={{ '@initial': '1', '@md': '2', '@lg': '3' }}>
                {rosterCards}
            </RosterGridBase>
        </Column>
    )
}

const RosterGridBase = styled('div', {
    display: 'grid',
    columnGap: '16px',
    rowGap: '16px',

    variants: {
        columns: {
            '1': { gridTemplateColumns: '1fr', },
            '2': { gridTemplateColumns: '1fr 1fr', },
            '3': { gridTemplateColumns: '1fr 1fr 1fr', },
        }
    }
})