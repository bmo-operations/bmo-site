import { styled } from '../common/theme/global';
import { Column, LayoutProps } from '../common/Layouts';

export interface HomeCardProps extends LayoutProps {
    spanDesktop?: number
}

export function HomeCard(props: HomeCardProps) {
  const { spanDesktop, ...layoutProps } = props
  return (
    <HomeCardBase
      gap='16px'
      gapMobile='12px'
      padding='32px'
      paddingMobile='24px'
      size={{ '@initial': 'mobile', '@md': 'desktop' }}
      span={{ '@initial': 'one', '@lg': spanDesktop == 2 ? "two" : "one" }}
      {...layoutProps}
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