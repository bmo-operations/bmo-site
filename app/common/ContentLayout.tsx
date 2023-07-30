import { styled, Column, Row } from "styled-system/jsx";
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
}

export function ContentGrid<T>({ year, contentName, content, element }: ContentGridProps<T>) {

    const contentCards = content.map(c => element(c))
    return (
        <Column gap="xl" align="stretch">
            <Row justify="space-between">
                <HeaderText first={`${year}`} second={contentName} />
            </Row>
            <ContentGridBase>
                {contentCards}
            </ContentGridBase>
        </Column>
    )
}

const ContentGridBase = styled('div', {
    base: {
        display: 'grid',
        columnGap: '16px',
        rowGap: '16px',
        gridTemplateColumns: {
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr'
        }
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