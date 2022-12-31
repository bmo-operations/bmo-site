import { gray, red } from "@radix-ui/colors";
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
            ...red,
        }
    }
});

export const Text = styled('p', {
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
    fontSize: '108px',
    fontWeight: '800',
    lineHeight: '80%',
    letterSpacing: '-0.02em',
})

export const Heading2 = styled('h2', {
    fontSize: '36px',
    fontWeight: '700',
})
  
export const Heading6 = styled('h6', {
    fontSize: '32px',
    fontWeight: '400',
    // lineHeight: '1'
})

export const Container = styled('div', {
    maxWidth: '1200px'
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