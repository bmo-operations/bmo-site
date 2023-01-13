import { styled } from '../common/theme/global';
import { Column, LayoutProps } from '../common/Layouts';


export function HomeCard(props: LayoutProps) {
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