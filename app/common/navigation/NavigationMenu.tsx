import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { usePathname, useRouter } from 'next/navigation';
import { red, gray, blackA } from '@radix-ui/colors';
import React from 'react';
import { CaretDownIcon, CheckIcon } from '@radix-ui/react-icons';
import { breakpoints, styled } from '../../../theme/global';
import Text from '../Text';
import Container, { HorizontalContainer } from '../Container';
import { Column, Row } from '../Layouts';

export default function NavigationMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <StyledRoot>
      <HorizontalContainer verticalPadding='12px'>
        <StyledList>
          <NavigationMenuPrimitive.Item>
            <Tab
              selected={pathname == "/"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="accent"
              onSelect={() => router.push('/')}
            >
              <Text style="subtitle">Home</Text>
            </Tab>
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <Tab
              selected={pathname == "/roster"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="neutral"
              onSelect={() => router.push('/roster')}
            >
              <Text style="subtitle">Roster</Text>
            </Tab>
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <Trigger
              selected={pathname != "/" && pathname != "/roster"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="neutral"
            >
              <Text style="subtitle">More</Text>
              <StyledCaret />
            </Trigger>
            <Popup size={{ '@initial': 'mobile', "@md": "desktop" }}>
              <Column>
                <MenuItem title='Zip’s Tips' selected={pathname == "/zipstips"} onSelect={() => router.push('/zipstips')} />
                <MenuItem title='Videos' selected={pathname == "/videos"} onSelect={() => router.push('/videos')} />
                <MenuItem title='Photos' selected={pathname == "/photos"} onSelect={() => router.push('/photos')} />
                <MenuItem title='News' selected={pathname == "/news"} onSelect={() => router.push('/news')} />
              </Column>
            </Popup>
          </NavigationMenuPrimitive.Item>
        </StyledList>
      </HorizontalContainer>
      {window.innerWidth < breakpoints[0] && <NavigationMenuPrimitive.Viewport />}
    </StyledRoot>
  )
}

const StyledRoot = styled(NavigationMenuPrimitive.Root, {
  borderBottom: `solid 1px ${blackA.blackA3}`
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  listStyle: 'none',
  gap: '4px',
});


const itemStyles = {
  outline: 'none',
  userSelect: 'none',
  borderRadius: '9999px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',

  variants: {
    size: {
      mobile: {
        padding: '8px 12px',
      },
      desktop: {
        padding: '12px 16px',
      },
    },
    color: {
      neutral: {
        color: gray.gray11,
        '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${gray.gray7}` },
        '&:hover': { backgroundColor: gray.gray4 },
      },
      accent: {
        color: red.red11,
        '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${red.red7}` },
        '&:hover': { backgroundColor: red.red4 },
      }
    },
    selected: {
      true: {},
      false: {},
    }
  },

  compoundVariants: [
    {
      color: 'neutral',
      selected: true,
      css: {
        backgroundColor: gray.gray3,
      }
    },
    {
      color: 'accent',
      selected: true,
      css: {
        backgroundColor: red.red3,
      }
    },
  ],
};


const Tab = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
});

const Trigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
});

const Popup = styled(NavigationMenuPrimitive.Content, {
  variants: {
    size: {
      mobile: {
        width: "100%",
      },
      desktop: {
        position: 'absolute',
        // top: 0,
        // left: 0,
        backgroundColor: "$gray1",
        width: "fit-content",
        padding: "8px",
        borderRadius: "16px",
        border: "solid 1px $gray7"
        // width: "100%",
      },
    },
  },
})

function MenuItem({ title, selected, onSelect }: { title: string, selected: boolean, onSelect: () => void }) {
  return (
    <MenuItemBase onSelect={() => onSelect()} size={{ '@initial': 'mobile', '@md': 'desktop' }}>
      <Row gap='12px' justify='space-between' align='center' style={{ width: '100%' }}>
        <Text
          style={(selected) ? "subtitle" : "body"}
          color={(selected) ? "primary" : "secondary"}
        >
          {title}
        </Text>
        {selected && <CheckIcon />}
      </Row>
    </MenuItemBase>
  )
}

const MenuItemBase = styled(NavigationMenuPrimitive.Link, {
  display: 'flex',
  alignItems: 'center',
  width: "100%",
  boxSizing: "border-box",
  cursor: "pointer",

  '&:hover': { backgroundColor: "$gray4", },
  '&:focus': { backgroundColor: "$gray5", },

  variants: {
    size: {
      mobile: {
        padding: "12px 16px",
      },
      desktop: {
        padding: "12px 16px",
        borderRadius: "8px",
        minWidth: "196px",
      }
    },
  },
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: gray.gray10,
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})