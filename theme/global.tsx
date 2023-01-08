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
        md: '(min-width: 620px)',
        lg: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            ...gray,
            ...blackA,
            ...red,
        },
        fontSizes: {
            h1Desktop: '108px',
            h1Mobile: '48px',
            h2Desktop: '48px',
            h2Mobile: '32px',
            h3Desktop: '36px',
            h3Mobile: '24px',
            h6Desktop: '32px',
            h6Mobile: '20px',
            bodyDesktop: '18px',
            bodyMobile: '16px',
            caption: '12px',
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
            accent: {
                color: "$red11",
            },
        },
    },

    defaultVariants: {
        style: 'body',
        color: 'primary'
    }
})

export const BaseText = styled('p', {
    variants: {
        style: {
            h1: { fontWeight: '800', lineHeight: '80%', letterSpacing: '-0.02em', },
            h2: { fontWeight: '700', },
            h3: { fontWeight: '700', },
            h6: { fontWeight: '400', lineHeight: '1', },
            subtitle: { fontWeight: '600', },
            body: {},
            caption: {},
        },
        color: {
            primary: {
                color: "$gray12",
            },
            secondary: {
                color: "$gray11",
            },
            tertiary: {
                color: "$gray10",
            },
            accent: {
                color: "$red11",
            },
        },
    },
})

export const Button = styled('button', {
    border: 'none',
    cursor: 'pointer',

    variants: {
        size: {
            mobile: {
                height: '44px',
                padding: '8px',
                borderRadius: '16px',
                fontSize: '100%',
            },
            desktop: {
                height: '56px',
                padding: '8px',
                borderRadius: '16px',
                fontSize: '100%',
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
        color: 'neutral',
    },
})