import { blackA, gray, red } from "@radix-ui/colors";
import { styled } from 'styled-system/jsx';
import Link from "next/link";

export const breakpoints = [620, 1024]

// @ts-ignore: "-webkit-box-orient" doesn't exist
const MaxLinesStyles = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
}

export const Text = styled('p', {
    base: {
        lineHeight: "normal",
    },
    variants: {
        style: {
            h1: { fontWeight: '800', lineHeight: '80%', letterSpacing: '-0.02em', fontSize: "h1", },
            h2: { fontWeight: '700', fontSize: "h2", },
            h3: { fontWeight: '700', fontSize: "h3", },
            h6: { fontWeight: '400', lineHeight: '1', fontSize: "h6", },
            subtitle: { fontWeight: '600',  fontSize: "body", },
            body: { fontSize: "body",},
            paragraph: { lineHeight: '150%', whiteSpace: 'pre-line',  fontSize: "body", },
            caption: { fontSize: "caption", },
        },
        color: {
            primary: {
                color: "gray.12",
            },
            secondary: {
                color: "gray.11",
            },
            tertiary: {
                color: "gray.10",
            },
            accent: {
                color: "red.11",
            },
        },
        maxLines: {
            one: {
                ...MaxLinesStyles,
                WebkitLineClamp: 1,
            },
            two: {
                ...MaxLinesStyles,
                WebkitLineClamp: 2,
            },
            four: {
                ...MaxLinesStyles,
                WebkitLineClamp: 4,
            },
            twelve: {
                ...MaxLinesStyles,
                WebkitLineClamp: 12,
            }
        },
    },
})


export const Button = styled('button', {
    base: {
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        base: {
            height: '44px',
            padding: '8px',
            borderRadius: '16px',
            fontSize: '100%',
            gap: '8px',
        },
        md: {
            height: '56px',
            padding: '8px',
            borderRadius: '16px',
            fontSize: '100%',
            gap: '8px',
        },
    },
    variants: {
        color: {
            neutral: {
                backgroundColor: 'gray.3',
                '&:hover': {
                    backgroundColor: 'gray.4'
                },
                '&:focus': {
                    backgroundColor: 'gray.5'
                },
                color: 'gray.11',
            },
            primary: {
                backgroundColor: 'red.3',
                '&:hover': {
                    backgroundColor: 'red.4'
                },
                '&:focus': {
                    backgroundColor: 'red.5'
                },
                color: 'red.11',
            },
        },
    },

    defaultVariants: {
        color: 'neutral',
    },
})

const undecoratedLinkStyles = {
    '&:link': { textDecoration: 'none', },
    '&:visited': { textDecoration: 'none', },
    '&:hover': { textDecoration: 'none', },
    '&:active': { textDecoration: 'none', },
}

export const UndecoratedA = styled('a', {
    base: {
        ...undecoratedLinkStyles
    }
})

export const UndecoratedLink = styled(Link, {
    base: {
        ...undecoratedLinkStyles
    }
})