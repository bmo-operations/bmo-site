import { styled } from "../../theme/global";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: string,
    paddingMobile?: string,
    gap?: string,
    gapMobile?: string,
    justify?: string,
    align?: string,
}

export function Row(props: LayoutProps) {
    return (<Flex {...{ direction: 'row', ...props }} />)
}

export function Column(props: LayoutProps) {
    return (<Flex {...{ direction: 'column', ...props }} />)
}

interface FlexProps extends LayoutProps {
    direction: string
}

function Flex(props: FlexProps) {

    const {
        direction,
        justify = 'start',
        align = 'start',
        gap = '0',
        gapMobile = gap,
        padding = '0',
        paddingMobile = padding,
        ...divProps
    } = props

    const BaseFlex = styled('div', {
        display: 'flex',
        flexDirection: direction,
        justifyContent: (justify ?? 'start'),
        alignItems: (align ?? 'start'),
    })

    return (
        <BaseFlex
            css={{
                gap: gapMobile,
                padding: paddingMobile,
                '@md': {
                    gap: gap,
                    padding: padding,
                },
            }}
            {...props}
        />
    )
}