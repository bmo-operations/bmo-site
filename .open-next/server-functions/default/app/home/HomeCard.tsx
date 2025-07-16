import { styled } from 'styled-system/jsx';
import { Column } from 'styled-system/jsx';

export const HomeCard = styled(Column, {
  base: {
    height: 'fit-content',
    borderRadius: "xl",
    gap: "md",
    padding: "xl",
  },
  variants: {
    spanDesktop: {
      one: {},
      two: {
        lg: {
          gridColumn: "span 2"
        }
      },
    }
  }
})