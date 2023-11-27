"use client"

import { useEffect, useState } from "react";
import { styled, Row, Column } from 'styled-system/jsx';
import { Container } from "../common/Container";
import { Text } from "../common/theme/global";
import { SearchBar } from "./SearchBar";
import { TipItem } from "./TipItem";
import { getTips } from "./Tips";

export default function ZipsTips() {
    const [searchTerm, setSearchTerm] = useState("")
    const allTips = getTips()
    const filteredTips = allTips.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.text.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <Container>
            <Column gap="32px" align="stretch">
                <Column>
                    <Text style="h2">Zip’s Tips</Text>
                    <Text style="subtitle" color="secondary">written by Josh Ziperstein ‘05</Text>
                </Column>
                <Row>
                    <SearchBar key="ztips-search-bar" placeholder="Search tips" value={searchTerm} onChange={value => setSearchTerm(value)} />
                </Row>
                <Column gap="32px" align="stretch">
                    {filteredTips.map(t => <TipItem tip={t} key={t.date} />)}
                </Column>
            </Column>
        </Container>
    );
}