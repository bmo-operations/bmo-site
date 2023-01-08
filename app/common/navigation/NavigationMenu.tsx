import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { usePathname, useRouter } from 'next/navigation';
import { red, gray, blackA } from '@radix-ui/colors';
import React from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { styled } from '../../../theme/global';
import Text from '../Text';
import Container, { HorizontalContainer } from '../Container';

export default function NavigationMenu() {
  let router = useRouter();
  let pathname = usePathname();

  return (
    <StyledRoot>
      <HorizontalContainer verticalPadding='12px'>
        <StyledList>
          <NavigationMenuPrimitive.Item>
            <StyledLink
              selected={pathname == "/"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="accent"
              onSelect={() => router.push('/')}
            >
              <Text style="subtitle">Home</Text>
            </StyledLink>
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <StyledLink
              selected={pathname == "/roster"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="neutral"
              onSelect={() => router.push('/roster')}
            >
              <Text style="subtitle">Roster</Text>
            </StyledLink>
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <StyledTrigger
              selected={pathname != "/" && pathname != "/roster"}
              size={{ '@initial': 'mobile', '@md': 'desktop' }}
              color="neutral"
            >
              <Text style="subtitle">More</Text>
              <StyledCaret />
            </StyledTrigger>
            <NavigationMenuPrimitive.Content>
              <StyledLink />
            </NavigationMenuPrimitive.Content>
          </NavigationMenuPrimitive.Item>
        </StyledList>
      </HorizontalContainer>
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


const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
});

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
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

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});