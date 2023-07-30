import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import radixColorsPreset from "pandacss-preset-radix-colors";
import { ColumnProps, RowProps } from "styled-system/jsx";

function objectMap<T extends any, R>(obj: T, fn: (key: any, value: any) => any): R {
  return Object.fromEntries(
    Object.entries(obj as any).map(
      ([k, v]) => [k, fn(v, k)]
    )
  ) as R
}

const globalStyles = defineGlobalStyles({
  '*': { margin: 0, padding: 0 },
  'button, input': { fontFamily: 'inherit', }
  // '*, p, h1, h2, h3, h4, h5, h6, span': {
  //     fontFamily: 'Aeonik, Inter, sans-serif',
  // }
});

const sizes = {
  xs: { value: { base: "4px", md: "8px"}},
  sm: { value: { base: "8px", md: "12px"}},
  md: { value: { base: "12px", md: "16px"}},
  lg: { value: { base: "16px", md: "24px"}},
  xl: { value: { base: "24px", md: "32px"}},
}

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        breakpoints: {
          md: `620px`,
          lg: `1024px`,
        },
      },
      tokens: {
        colors: {
          // ...objectMap(gray, (k, v) => { value: v }),
          // ...objectMap(blackA, (k, v) => { value: v }),
          // ...objectMap(red, (k, v) => { value: v }),
        },
      },
      semanticTokens: {
        fontSizes: {
          h1: { value: { base: '48px', md: '108px' } },
          h2: { value: { base: '32px', md: '48px'} },
          h3: { value: { base: '24px', md: '36px'} },
          h6: { value: { base: '20px', md: '32px'} },
          body: { value: { base: '16px', md: '18px'} },
          caption: { value: '12px' },
        },
        spacing: { ...sizes },
        radii: { ...sizes }
      },
    },

    patterns: {
      extend: {
        column: {
          description: "A column component",
          properties: {
            padding: { type: 'string' },
            gap: { type: 'string' },
            justify: { type: 'enum', value: ['start', 'center', 'end', 'space-between']},
            align: { type: 'enum', value: ['start', 'center', 'end', 'stretch']},
          },
          transform(props: ColumnProps) {
            const {
              justify = 'start',
              align = 'start',
              gap,
              padding,
              ...divProps
            } = props
            return {
              display: "flex",
              flexDirection: "column",
              justifyContent: (justify ?? 'start'),
              alignItems: (align ?? 'start'),
              gap: gap,
              padding: padding,
              ...divProps
            }
          }
        },
        row: {
          description: "A row component",
          properties: {
            padding: { type: 'string' },
            gap: { type: 'string' },
            justify: { type: 'enum', value: ['start', 'center', 'end', 'space-between']},
            align: { type: 'enum', value: ['start', 'center', 'end', 'stretch']},
          },
          transform(props: RowProps) {
            const {
              justify = 'start',
              align = 'start',
              gap,
              padding,
              ...divProps
            } = props
            return {
              display: "flex",
              flexDirection: "row",
              justifyContent: justify,
              alignItems: align,
              gap: gap,
              padding: padding,
              ...divProps
            }
          }
        },
      },
    },

    presets: [
      radixColorsPreset(),
      // Re-add the panda preset if you want to keep
      // the default keyframes, breakpoints, tokens
      // and textStyles provided by PandaCSS
      "@pandacss/preset-panda",
    ],

    globalCss: globalStyles,
    jsxFramework: 'react',
    // The output directory for your css system
    outdir: "styled-system",
})