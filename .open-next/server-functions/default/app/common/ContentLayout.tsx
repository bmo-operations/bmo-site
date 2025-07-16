import { useMemo } from "react";
import { styled, Column, Row, Flex } from "styled-system/jsx";
import { Text } from "./theme/global";

export interface ContentProps<T> {
    content: Map<number, T>,
    element: (year: number, item: T) => JSX.Element,
}

export function ContentLayout<T>({ content, element }: ContentProps<T>) {
    const contentItems = [...content].sort((a, b) => b[0] - a[0]).map(entry => {
        const [year, value] = entry
        return element(year, value)
    })
    return (
        <Column gap="64px" align="stretch">
            {contentItems}
        </Column>
    )
}

interface ContentGridProps<T> {
    year: number,
    contentName: string,
    content: T[],
    element: (item: T) => JSX.Element,
    headerWidget?: JSX.Element,
}

export function ContentGrid<T>({ year, contentName, content, element, headerWidget }: ContentGridProps<T>) {

    const contentCards = useMemo(() => content.map(c => element(c)), [content])
    return (
        <Column gap="xl" align="stretch">
            <ResponsiveFlex justify="space-between">
                <HeaderText first={`${year}`} second={contentName} />
                {headerWidget ?? headerWidget}
            </ResponsiveFlex>
            <ContentGridBase>
                {contentCards}
            </ContentGridBase>
        </Column>
    )
}

const ContentGridBase = styled('div', {
    base: {
        display: 'grid',
        columnGap: 'lg',
        rowGap: 'lg',
        gridTemplateColumns: {
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr'
        }
    },
})

const ResponsiveFlex = styled(Flex, {
    base: {
        flexDirection: { base: "column", md: "row" },
        gap: { base: "sm", md: "0" },
    },
})


export function HeaderText({ first, second }: { first: string, second: string }) {
    return (
        <Row gap="sm">
            <Text style="h2">{`${first}`}</Text>
            <Text style="h2" color='secondary'>{`${second}`}</Text>
        </Row>
    )
}