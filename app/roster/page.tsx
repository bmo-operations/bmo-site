"use client"

import { useState } from "react"
import { styled } from "../../theme/global"
import { Player } from "./Player"
import { getPlayerBios } from "./PlayerBioRepository"
import RosterCard from "./RosterCard"

export default function RosterPage() {
    const playerBios: Player[] = getPlayerBios(2022)
    const [popupPlayer, setPopupPlayer] = useState<Player | null>(null)

    const rosterCards = playerBios.map(bio => (<RosterCard player={bio} year={2022} onMore={() => setPopupPlayer(bio)}/>))
    return (
        <RosterGrid>
            {rosterCards}
        </RosterGrid>
    )
}

const RosterGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '16px',
    rowGap: '16px',
})