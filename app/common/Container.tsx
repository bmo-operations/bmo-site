import { styled } from "../../theme/global"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Container(props: ContainerProps) {
    return (<ContainerBase size={{ '@initial': "mobile", '@md': "desktop" }} verticalPadding={true} {...props} />)
}

export interface HorizontalContainerProps extends ContainerProps {
    verticalPadding?: string,
    verticalPaddingMobile?: string
}

export function HorizontalContainer(props: HorizontalContainerProps) {
    const {
        verticalPadding = '0',
        verticalPaddingMobile = verticalPadding,
        ...divProps
    } = props

    return (
        <ContainerBase
            size={{ '@initial': "mobile", '@md': "desktop" }}
            verticalPadding={false}
            css={{
                paddingTop: verticalPadding, paddingBottom: verticalPadding,
                '@md': { paddingTop: verticalPaddingMobile, paddingBottom: verticalPaddingMobile, }
            }}
            {...divProps}
        />
    )
}

const maxContainerWidthPx = 1200
const ContainerBase = styled('div', {
    maxWidth: `${maxContainerWidthPx}px`,
    margin: 'auto',

    variants: {
        size: {
            mobile: { padding: '16px', },
            desktop: { padding: '48px', },
        },
        verticalPadding: {
            true: {},
            false: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    }
})