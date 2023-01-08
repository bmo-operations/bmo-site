import { styled } from "../../theme/global"

export default function Container({ children, paddingY }: { children: React.ReactNode, paddingY?: string }) {
    return (<ContainerBase size={{ '@initial': "mobile", '@md': "desktop" }}>{children}</ContainerBase>)
}

const maxContainerWidthPx = 1200
const ContainerBase = styled('div', {
    maxWidth: `${maxContainerWidthPx}px`,
    margin: 'auto',

    variants: {
        size: {
            mobile: { padding: '16px', },
            desktop: { padding: '48px', },
        }
    }
})