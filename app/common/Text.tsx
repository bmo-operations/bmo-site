import { BaseText } from "../../theme/global";

export default function Text({ style, children, color }: {
    style: 'h1' | 'h2' | 'h3' | 'h6' | 'subtitle' | 'body' | 'caption',
    color?: "primary" | "secondary" | "tertiary" | "accent" | undefined,
    children: React.ReactNode,
}) {
    switch (style) {
        case 'h1': return (<BaseText as={'h1'} css={{ fontSize: "$h1Mobile", '@md': { fontSize: "$h1Desktop" } }} style="h1" color={color}>{children}</BaseText>)
        case 'h2': return (<BaseText as={'h2'} css={{ fontSize: "$h2Mobile", '@md': { fontSize: "$h2Desktop" } }} style="h2" color={color}>{children}</BaseText>)
        case 'h3': return (<BaseText as={'h3'} css={{ fontSize: "$h3Mobile", '@md': { fontSize: "$h3Desktop" } }} style="h3" color={color}>{children}</BaseText>)
        case 'h6': return (<BaseText as={'h6'} css={{ fontSize: "$h6Mobile", '@md': { fontSize: "$h6Desktop" } }} style="h6" color={color}>{children}</BaseText>)
        case 'subtitle': return (<BaseText css={{ fontSize: "$bodyMobile", '@md': { fontSize: "$bodyDesktop" } }} style="subtitle" color={color}>{children}</BaseText>)
        case 'body': return (<BaseText css={{ fontSize: "$bodyMobile", '@md': { fontSize: "$bodyDesktop" } }} style="body" color={color}>{children}</BaseText>)
        case 'caption': return (<BaseText css={{ fontSize: "$caption" }} style="caption" color={color}>{children}</BaseText>)
    }
}