"use client"

import { useEffect, useState } from "react";
import { styled } from "../../theme/global";
import Container from "../common/Container";
import { Column, Row } from "../common/Layouts";
import Text from "../common/Text";
import { TipItem } from "./TipItem";
import { getTips } from "./Tips";

const allTips = getTips()

export default function ZipsTips() {
    const [searchTerm, setSearchTerm] = useState("")
    const filteredTips = allTips.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.text.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <Container>
            <Column gap="32px" align="stretch">
                <Column>
                    <Text style="h2">Zip’s Tips</Text>
                    <Text style="subtitle" color="secondary">written by Josh Ziperstein ‘05</Text>
                </Column>
                <Row>
                    <SearchBarBase placeholder="Search tips" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </Row>
                <Column gap="32px" align="stretch">
                    {filteredTips.map(t => <TipItem tip={t} />)}
                </Column>
            </Column>
        </Container>
    );
}

function SearchBar({ value, placeholder, onChange }: { value: string, placeholder: string, onChange: (value: string) => void }) {
    const [v, setV] = useState(value)
    useEffect(() => setV(value), [value])
    return (<input placeholder={placeholder} value={v} onChange={e => onChange(e.target.value)} />)
}

const SearchBarBase = styled('input', {
    padding: '16px',
    backgroundColor: '$gray3',
    borderRadius: '9999px',
    border: 'none',
    width: '100%',

    variants: {
        size: {
            mobile: {
                fontSize: "$bodyMobile",
            },
            desktop: {
                fontSize: "$bodyDesktop",
            },
        },
    }
})