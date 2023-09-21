"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { styled, Column } from 'styled-system/jsx';
import { Container } from "../common/Container"
import { Player } from "./Player"
import { allRosters } from "./RosterRepository"
import RosterCard from "./RosterCard"
import RosterPopup from "./RosterPopup"
import { ContentLayout, ContentGrid, HeaderText } from "../common/ContentLayout"
import { DialogOverlay } from "../common/Dialog"
import { RosterSort, SortMethod, SortState } from "./RosterSort";

class PopupInfo {
    constructor(
        public player: Player,
        public year: number,
    ) { }
}

export default function RosterPage() {
    const rosters = useMemo(() => allRosters(), [])
    const [popupPlayer, setPopupPlayer] = useState<PopupInfo | null>(null)
    const [sortState, setSortState] = useState<SortState>({ method: SortMethod.Name, isAscending: true })


    return (
        <Container>
            <ContentLayout
                content={rosters}
                element={(year, value) =>
                    (typeof value == "string")
                        ? <RosterImage key={year} year={year} />
                        : <ContentGrid
                            key={year}
                            year={year}
                            contentName="Roster"
                            // content={[...value].sort((p1, p2) => sortPlayers(sortState, p1, p2))}
                            content={value}
                            element={p =>
                                <RosterCard
                                    key={p.id}
                                    player={p}
                                    year={year}
                                    onMore={() => setPopupPlayer(new PopupInfo(p, year))}
                                />
                            }
                            // headerWidget={<RosterSort currentSortState={sortState} onSort={s => setSortState(s)}/>}
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
        <Column gap="xl">
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

function sortPlayers(sortState: SortState, p1: Player, p2: Player): number {
    switch(sortState.method) {
        case SortMethod.Name: return (sortState.isAscending ? p1.name.localeCompare(p2.name) : p2.name.localeCompare(p1.name))
        case SortMethod.Number: return (sortState.isAscending ? p1.number - p2.number : p2.number - p1.number)
    }
}