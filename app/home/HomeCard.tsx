import { styled } from '../../theme/global';

export const HomeCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',

  variants: {
    size: {
      mobile: {
        gap: '12px',
        padding: '24px',
        borderRadius: '24px',
      },
      desktop: {
        gap: '16px',
        padding: '32px',
        borderRadius: '32px',
      },
    },
  },
})