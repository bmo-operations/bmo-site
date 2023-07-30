import { Text } from "./theme/global";
import { css } from 'styled-system/css';


export interface TextProps {
    style: 'h1' | 'h2' | 'h3' | 'h6' | 'subtitle' | 'body' | 'paragraph' | 'caption',
    color?: "primary" | "secondary" | "tertiary" | "accent" | undefined,
    maxLines?: number,
    children: React.ReactNode,
}