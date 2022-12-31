import { blackA, gray, red } from "@radix-ui/colors";
import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 },

    // '*, p, h1, h2, h3, h4, h5, h6, span': {
    //     fontFamily: 'Aeonik, Inter, sans-serif',
    // }
});

export const { styled, css } = createStitches({
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            ...gray,
            ...blackA,
            ...red,
        },
        fontSizes: {
            caption: '12px',
            body: '18px',
            h6: '32px',
            h2: '36px',
            h1: '108px'
        }
    },
});

export const Text = styled('p', {
    fontSize: '$body',

    variants: {
        style: {
            subtitle: {
                fontWeight: 'bold'
            },
            body: {
                fontWeight: 'normal'
            }
        },
        color: {
            primary: {
                color: "$gray12"
            },
            secondary: {
                color: "$gray11"
            },
            tertiary: {
                color: "$gray10"
            },
        }
    },

    defaultVariants: {
        style: 'body',
        color: 'primary'
    }
})

export const Heading1 = styled('h1', {
    fontSize: '$h1',
    fontWeight: '800',
    lineHeight: '80%',
    letterSpacing: '-0.02em',
})

export const Heading2 = styled('h2', {
    fontSize: '$h2',
    fontWeight: '700',

    variants: {
        color: {
            primary: {
                color: "$gray12"
            },
            secondary: {
                color: "$gray11"
            },
            tertiary: {
                color: "$gray10"
            },
        }
    },
})

export const Heading6 = styled('h6', {
    fontSize: '$h6',
    fontWeight: '400',
    // lineHeight: '1'
})

const maxContainerWidthPx = 1200
export const Container = styled('div', {
    maxWidth: `${maxContainerWidthPx}px`,
    padding: '16px',
    margin: 'auto',
})

export const Button = styled('button', {
    border: 'none',
    cursor: 'pointer',

    variants: {
        size: {
            small: {

            },
            medium: {
                height: '48px',
                padding: '8px',
                borderRadius: '16px',
                fontSize: '100%',
            },
            large: {

            },
        },

        color: {
            neutral: {
                backgroundColor: '$gray3',
                '&:hover': {
                    backgroundColor: '$gray4'
                },
                '&:focus': {
                    backgroundColor: '$gray5'
                },
                color: '$gray11',
            },
            primary: {
                backgroundColor: '$red3',
                '&:hover': {
                    backgroundColor: '$red4'
                },
                '&:focus': {
                    backgroundColor: '$red5'
                },
                color: '$red11',
            },
        },
    },

    defaultVariants: {
        size: 'medium',
        color: 'neutral',
    },
})