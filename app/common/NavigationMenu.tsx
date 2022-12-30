import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';
import { red, violet, mauve, indigo, purple, blackA } from '@radix-ui/colors';
import React from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function NavigationMenu() {
    let router = useRouter();
    return (
        <NavigationMenuPrimitive.Root>
            <StyledList>
                <NavigationMenuPrimitive.Item>
                    <StyledLink onSelect={() => router.push('/home')}>Home</StyledLink>
                </NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Item>
                    <StyledLink onSelect={() => router.push('/roster')}>Roster</StyledLink>
                </NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Item>
                    <StyledTriggerWithCaret>More</StyledTriggerWithCaret>
                    <NavigationMenuPrimitive.Content>
                        <StyledLink />
                    </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
            </StyledList>
        </NavigationMenuPrimitive.Root>
    )
}

const StyledList = styled(NavigationMenuPrimitive.List, {
    all: 'unset',
    display: 'flex',
    backgroundColor: 'white',
    listStyle: 'none',
    padding: 8,
    borderBottom: `solid 1px ${blackA.blackA3}`
});
  

const itemStyles = {
    padding: '12px 16px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    color: red.red11,
    '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${red.red7}` },
    '&:hover': { backgroundColor: red.red3 },
};
  

const StyledLink = styled(NavigationMenuPrimitive.Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 15,
    lineHeight: 1,
});

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
    all: 'unset',
    ...itemStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
  });

  const StyledCaret = styled(CaretDownIcon, {
    position: 'relative',
    color: red.red10,
    top: 1,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'transform 250ms ease',
    },
  });
  

  const StyledTriggerWithCaret = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  ));
  
  
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
  
  const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
    <StyledIndicator {...props} ref={forwardedRef}>
      <StyledArrow />
    </StyledIndicator>
  ));  