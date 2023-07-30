import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

export const Container = styled('div', {
    base: {
        maxWidth: `1200px`,
        margin: 'auto',
        paddingX: {
            base: '16px',
            md: '48px',    
        }
    },
    variants: {
        verticalPadding: {
            same: {
                paddingY: {
                    base: '16px',
                    md: '48px',    
                }
            },
            none: {}
        }
    },
    defaultVariants: {
        verticalPadding: "same",
    }
})