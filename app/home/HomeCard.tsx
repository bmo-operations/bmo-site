import { styled } from '../common/theme/global';
import { Column, LayoutProps } from '../common/Layouts';

export interface HomeCardProps extends LayoutProps {
    spanDesktop?: number
}

export function HomeCard(props: HomeCardProps) {
  return (
    <HomeCardBase
      gap='16px'
      gapMobile='12px'
      padding='32px'
      paddingMobile='24px'
      size={{ '@initial': 'mobile', '@md': 'desktop' }}
        span={{ '@initial': 'one', '@md': props.spanDesktop == 2 ? "two" : "one" }}
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
    span: {
        one: {},
        two: { gridColumn: "span 2" },
    }
  },
})