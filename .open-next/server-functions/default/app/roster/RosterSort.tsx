"use client"

import { CaretSortIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Text } from 'app/common/theme/global';
import { SortAscending, SortDescending } from 'phosphor-react';
import React from 'react';
import { Column, Flex, Row, styled } from 'styled-system/jsx';
import {
    Select,
    SelectContent,
    SelectLabel,
    SelectOption,
    SelectOptionGroup,
    SelectOptionGroupLabel,
    SelectPositioner,
    SelectTrigger,
    Portal,
} from '@ark-ui/react'

export enum SortMethod {
    Name, Number
}

export interface SortState {
    method: SortMethod,
    isAscending: boolean,
}

export function RosterSort(
    { currentSortState, onSort }: {
        currentSortState: SortState,
        onSort: (sortState: SortState) => void
    }) {
    return (
        <Select
            onChange={(details) => { onSort(stringToSortState(details?.value)) }}
        >
            {({ selectedOption }) => (
                <>
                    <SelectTriggerBase aria-label="Sort method">
                        <Row gap="md" align="center">
                            {currentSortState.isAscending ? <SortAscending /> : <SortDescending />}
                            <ResponsiveFlex align="start">
                                <Text style="caption" color="secondary">Sort by</Text>
                                <Text style="subtitle">{sortToString(currentSortState)}</Text>
                            </ResponsiveFlex>
                        </Row>
                    </SelectTriggerBase>
                    <Portal>
                        <SelectPositioner>
                            <SelectContentBase>
                                <SelectOptionBase value="name-ascending" label="Name (a-z)" />
                                <SelectOptionBase value="name-descending" label="Name (z-a)" />
                                <SelectOptionBase value="number-ascending" label="Number (0-99)" />
                                <SelectOptionBase value="number-descending" label="Number (99-0)" />
                            </SelectContentBase>

                        </SelectPositioner>
                    </Portal>
                </>
            )}
        </Select>
    )
}

const SelectTriggerBase = styled(SelectTrigger, {
    base: {
        backgroundColor: "gray.a.3",
        px: "lg",
        py: "8px",
        borderRadius: "xl",
        cursor: "pointer",
        width: "fit-content",
    },
})

const SelectContentBase = styled(SelectContent, {
    base: {
        backgroundColor: "gray.1",
        border: "solid 1px token(colors.gray.7)",
        borderRadius: "md",
        padding: "xs",
    },
})

const SelectOptionBase = styled(SelectOption, {
    base: {
        cursor: "pointer",
        padding: "sm",
        borderRadius: "sm",
        color: "gray.11",
        _hover: {
            backgroundColor: "gray.4"
        }
    },
})

const ResponsiveFlex = styled(Flex, {
    base: {
        flexDirection: { base: "row", md: "column" },
        gap: { base: "4px", md: "0" },
    },
})


function sortToString(sortState: SortState) {
    switch (sortState.method) {
        case SortMethod.Name: return "Name " + (sortState.isAscending ? "(a-z)" : "(z-a)")
        case SortMethod.Number: return "Number " + (sortState.isAscending ? "(0-99)" : "(99-0)")
    }
}

function stringToSortState(raw?: string): SortState {
    switch(raw) {
        case "name-ascending": return { method: SortMethod.Name, isAscending: true }
        case "name-descending": return { method: SortMethod.Name, isAscending: false }
        case "number-ascending": return { method: SortMethod.Number, isAscending: true }
        case "number-descending": return { method: SortMethod.Number, isAscending: false }
        default: throw new Error(`Invalid value selected: ${raw}`)
    }
}