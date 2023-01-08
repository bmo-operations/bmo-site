import { styled } from "../../theme/global";

export interface LayoutProps {
    padding?: string,
    paddingMobile?: string,
    gap?: string,
    gapMobile?: string,
    justify?: string,
    align?: string,
    children: React.ReactNode
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
    const BaseFlex = styled('div', {
        display: 'flex',
        flexDirection: props.direction,
        justifyContent: (props.justify ?? 'start'),
        alignItems: (props.align ?? 'start'),
    })

    return (
        <BaseFlex css={{
            gap: (props.gapMobile ?? props.gap ?? '0'),
            padding: (props.paddingMobile ?? props.padding ?? '0'),
            '@md': {
                gap: (props.gap ?? '0'),
                padding: (props.padding ?? '0'),
            },
        }}>
            {props.children}
        </BaseFlex>
    )
}