"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { useState } from "react"
import { Container, Heading2, styled } from "../../theme/global"
import { Column, Row } from "../common/Layouts"
import { Player } from "./Player"
import { hasBioJSON } from "./PlayerBioRepository"
import RosterCard from "./RosterCard"
import RosterGrid from "./RosterGrid"
import RosterPopup from "./RosterPopup"

class PopupInfo {
    constructor(
        public player: Player,
        public year: number,
    ) { }
}

export default function RosterPage() {
    const [popupPlayer, setPopupPlayer] = useState<PopupInfo | null>(null)

    const rosters = [2022, 2020, 2019].map(year =>
        (hasBioJSON(year))
            ? <RosterGrid year={year} onPopupPlayer={p => setPopupPlayer(new PopupInfo(p, year))} />
            : <RosterImage year={year} />
    )

    return (
        <Container>
            <Column gap="64px" align="stretch">
                {rosters}
            </Column>
            {popupPlayer !== null &&
                <Dialog.Root defaultOpen onOpenChange={o => setPopupPlayer(null)}>
                    <Dialog.Portal>
                        <DialogOverlay />
                        <RosterPopup player={popupPlayer.player} year={popupPlayer.year} onClose={() => setPopupPlayer(null)} />
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

function RosterImage({ year }: { year: number }) {
    return (
        <Column gap="32px">
            <RosterYearText year={year} />
            <Image
                src={`/roster/${year}/roster${year}.jpg`}
                alt={`Image of the ${year} BMo roster`}
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
            />
        </Column>
    )
}

export function RosterYearText({ year }: { year: number }) {
    return (
        <Row gap="12px">
            <Heading2>{`${year}`}</Heading2>
            <Heading2 color='secondary'>{`Roster`}</Heading2>
        </Row>
    )
}