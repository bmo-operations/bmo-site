"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { useState } from "react"
import { styled } from "../common/theme/global"
import Container from "../common/Container"
import { Column } from "../common/Layouts"
import { Player } from "./Player"
import { allRosters } from "./RosterRepository"
import RosterCard from "./RosterCard"
import RosterPopup from "./RosterPopup"
import { ContentLayout, ContentGrid, HeaderText } from "../common/ContentLayout"
import { DialogOverlay } from "../common/Dialog"

class PopupInfo {
    constructor(
        public player: Player,
        public year: number,
    ) { }
}

export default function RosterPage() {
    const [popupPlayer, setPopupPlayer] = useState<PopupInfo | null>(null)

    return (
        <Container>
            <ContentLayout
                content={allRosters()}
                element={(year, value) =>
                    (typeof value == "string")
                        ? <RosterImage key={year} year={year} />
                        : <ContentGrid
                            key={year}
                            year={year}
                            contentName="Roster"
                            content={value}
                            element={p =>
                                <RosterCard
                                    key={p.id}
                                    player={p}
                                    year={year}
                                    onMore={() => setPopupPlayer(new PopupInfo(p, year))}
                                />
                            }
                        />
                }
            />
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

function RosterImage({ year }: { year: number }) {
    return (
        <Column gap="32px" gapMobile="16px">
            <HeaderText first={`${year}`} second="Roster" />
            <Image
                src={`/content/roster/${year}/roster${year}.jpg`}
                alt={`Image of the ${year} BMo roster`}
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
            />
        </Column>
    )
}