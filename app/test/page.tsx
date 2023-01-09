"use client"

import { useState } from "react"
import Container, { HorizontalContainer } from "../common/Container"
import { Column } from "../common/Layouts"
import { SearchBar } from "../zipstips/page"

export default function TestPage() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <HorizontalContainer>
            <SearchBar key="ztips-search-bar" placeholder="Search tips" value={searchTerm} onChange={value => setSearchTerm(value)} />
        </HorizontalContainer>
    )
}