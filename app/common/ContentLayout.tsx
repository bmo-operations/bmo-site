import { styled } from "../../theme/global";
import { Column, Row } from "./Layouts";
import Text from "./Text";

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
        <Column gap="32px" gapMobile="16px" align="stretch">
            <Row justify="space-between">
                <HeaderText first={`${year}`} second={contentName} />
            </Row>
            <ContentGridBase columns={{ '@initial': '1', '@md': '2', '@lg': '3' }}>
                {contentCards}
            </ContentGridBase>
        </Column>
    )
}

const ContentGridBase = styled('div', {
    display: 'grid',
    columnGap: '16px',
    rowGap: '16px',

    variants: {
        columns: {
            '1': { gridTemplateColumns: '1fr', },
            '2': { gridTemplateColumns: '1fr 1fr', },
            '3': { gridTemplateColumns: '1fr 1fr 1fr', },
        }
    }
})

export function HeaderText({ first, second }: { first: string, second: string }) {
    return (
        <Row gap="12px" gapMobile="8px">
            <Text style="h2">{`${first}`}</Text>
            <Text style="h2" color='secondary'>{`${second}`}</Text>
        </Row>
    )
}