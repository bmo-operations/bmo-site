import { styled } from '../../theme/global';
import { Column } from '../common/Layouts';


export function HomeCard(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <HomeCardBase
      gap='16px'
      gapMobile='12px'
      padding='32px'
      paddingMobile='24px'
      size={{ '@initial': 'mobile', '@md': 'desktop' }}
      {...props}
    />
  )
}

const HomeCardBase = styled(Column, {
  height: 'fit-content',

  variants: {
    size: {
      mobile: {
        borderRadius: '24px',
      },
      desktop: {
        borderRadius: '32px',
      },
    },
  },
})