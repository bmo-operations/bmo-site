"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import { Container, styled } from "../../theme/global"
import { Player } from "./Player"
import { getPlayerBios } from "./PlayerBioRepository"
import RosterCard from "./RosterCard"
import RosterPopup from "./RosterPopup"

class PopupInfo {
    constructor(
        public player: Player,
        public year: number,
    ) { }
}

export default function RosterPage() {
    const playerBios: Player[] = getPlayerBios(2022)
    const [popupPlayer, setPopupPlayer] = useState<PopupInfo | null>(null)

    const rosterCards = playerBios.map(bio => (<RosterCard player={bio} year={2022} onMore={() => setPopupPlayer(new PopupInfo(bio, 2022))} />))
    return (
        <Container>
            <RosterGrid>
                {rosterCards}
            </RosterGrid>
            {popupPlayer !== null &&
                <Dialog.Root defaultOpen onOpenChange={o => setPopupPlayer(null)}>
                    <Dialog.Portal>
                        <DialogOverlay />
                        <div style={{ width: 'calc(100% - 10vh)', height: '100%', position: "fixed", top: '0', padding: '5vh' }}>
                            <RosterPopup player={popupPlayer.player} year={popupPlayer.year} onClose={() => setPopupPlayer(null)} />
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>}
        </Container>
    )
}

const DialogOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    top: '0',
    backgroundColor: '$blackA11',
    width: '100%',
    height: '100%'
})

const RosterGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '16px',
    rowGap: '16px',
})