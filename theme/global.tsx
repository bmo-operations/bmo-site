import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 },

    '*, p, h1, h2, h3, h4, h5, h6, span': {
        fontFamily: 'Aeonik, sans-serif',
    }
});  

export const { styled, css } = createStitches({
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      ls: '(min-width: 1024px)',
    },
});

export const Heading1 = styled('h1', {
    fontSize: '108px',
    fontWeight: '800',
    lineHeight: '1'
})
  