import { BaseText } from "./theme/global";
import {CSS} from "@stitches/react";

export interface TextProps {
    style: 'h1' | 'h2' | 'h3' | 'h6' | 'subtitle' | 'body' | 'paragraph' | 'caption',
    color?: "primary" | "secondary" | "tertiary" | "accent" | undefined,
    maxLines?: number,
    css?: CSS,
    children: React.ReactNode,
}

export default function Text({ style, children, maxLines, css, color }: TextProps) {
    const tag = (style[0] == 'h') ? style : 'p'
    const size = (style[0] == 'h' || style == 'caption') ? style : 'body'

    return (
        <BaseText
            as={tag}
            css={{
                fontSize: `$${size}Mobile`, '@md': { fontSize: `$${size}Desktop` },
                lineClamp: `${maxLines ?? "none"}`,
                "-webkit-line-clamp": `${maxLines ?? "none"}`,
                textOverflow: `${maxLines != undefined ? "ellipsis" : "inherit"}`,
                overflow: `${maxLines != undefined ? "hidden" : "inherit"}`,
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                ...css,
            }}
            style={style}
            color={color}
        >
            {children}
        </BaseText>
    )
}