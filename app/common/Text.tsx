import { BaseText } from "../../theme/global";

export interface TextProps {
    style: 'h1' | 'h2' | 'h3' | 'h6' | 'subtitle' | 'body' | 'paragraph' | 'caption',
    color?: "primary" | "secondary" | "tertiary" | "accent" | undefined,
    children: React.ReactNode,
}

export default function Text({ style, children, color }: TextProps) {
    const tag = (style[0] == 'h') ? style : 'p'
    const size = (style[0] == 'h' || style == 'caption') ? style : 'body'

    return (
        <BaseText
            as={tag}
            css={{ fontSize: `$${size}Mobile`, '@md': { fontSize: `$${size}Desktop` } }}
            style={style}
            color={color}
        >
            {children}
        </BaseText>
    )
}