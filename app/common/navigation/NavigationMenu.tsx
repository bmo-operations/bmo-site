"use client"

import { CaretDownIcon, CheckIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { css } from "styled-system/css";
import { Column, Row, styled } from "styled-system/jsx";
import { RecipeDefinition, RecipeVariantRecord } from 'styled-system/types/recipe';
import { Container } from '../Container';
import { Text, UndecoratedLink, breakpoints } from '../theme/global';

export default function NavigationMenu() {
  const currentPath = usePathname();
  const [loadedWindow, setLoadedWindow] = useState<Window | undefined>()
  const moreSelected = !["/", "/roster", "/support"].includes(currentPath)

  useEffect(() => setLoadedWindow(window), [])

  return (
    <StyledRoot>
      <Container verticalPadding='none' className={css({ paddingY: "sm" })}>
        <StyledList>
          <NavigationMenuPrimitive.Item>
            <Tab title="Home" selectedPath={currentPath} pathname="/" />
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <Tab title="Roster" selectedPath={currentPath} pathname="/roster" />
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <Tab title="Support" selectedPath={currentPath} pathname="/support" />
          </NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Item>
            <Trigger
              //@ts-ignore selectState doesn't exist
              selectState={moreSelected ? "selected" : "unselected"}
              color="neutral"
            >
              <Text style="subtitle">{"More"}</Text>
              <StyledCaret />
            </Trigger>
            <Popup>
              <Column>
                <MenuItem title='News' pathname="/news" selectedPath={currentPath} />
                <MenuItem title='Recruiting' pathname="/recruiting" selectedPath={currentPath} />
                <MenuItem title='Videos' pathname="/videos" selectedPath={currentPath} />
                <MenuItem title='Photos' pathname="https://photos.app.goo.gl/U1kvAPF6PReKE6nY6" selectedPath={currentPath} />
                <MenuItem title='Zip’s Tips' pathname="/zipstips" selectedPath={currentPath} />
                <MenuItem title='Playbook' pathname="https://www.youtube.com/watch?v=dQw4w9WgXcQ" selectedPath={currentPath} />
              </Column>
            </Popup>
          </NavigationMenuPrimitive.Item>
        </StyledList>
      </Container>
      {(loadedWindow?.innerWidth ?? 0) < breakpoints[0] && <NavigationMenuPrimitive.Viewport />}
    </StyledRoot>
  )
}

const StyledRoot = styled(NavigationMenuPrimitive.Root, {
  base: {
    borderBottom: `solid 1px token(colors.gray.7)`,
    // overflowX: "scroll", // fixes container scrolling issues on safari but breaks popup, need to find better solution (maybe wrapper div?)  
  },
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  base: {
    all: 'unset',
    display: 'flex',
    listStyle: 'none',
    gap: '4px',  
  },
});


const itemStyles: RecipeDefinition<RecipeVariantRecord> = {
  base: {
    outline: 'none',
    userSelect: 'none',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    px: "md",
    py: "sm"
  },

  variants: {
    color: {
      neutral: {
        color: "gray.11",
        '&:focus': { position: 'relative', boxShadow: `0 0 0 2px token(colors.gray.7)` },
        '&:hover': { backgroundColor: "gray.4" },
      },
      accent: {
        color: "red.11",
        '&:focus': { position: 'relative', boxShadow: `0 0 0 2px token(colors.red.7)` },
        '&:hover': { backgroundColor: "red.4" },
      }
    },
    selectState: {
      selected: {},
      unselected: {},
    }
  },

  compoundVariants: [
    {
      color: 'neutral',
      selectState: "selected",
      css: {
        color: "gray.11",
        backgroundColor: "gray.3",
      }
    },
    {
      color: 'accent',
      selectState: "selected",
      css: {
        color: "red.11",
        backgroundColor: "red.3",
      }
    },
  ],
};

interface LinkProps { title: string, pathname: string, selectedPath: string | null }

function Tab({ title, pathname, selectedPath }: LinkProps) {
  const isSelected = selectedPath?.endsWith(pathname)
  const router = useRouter()
  // <UndecoratedLink href={pathname}>
  return (
    <TabBase 
      href={pathname} 
      color={pathname == `/` ? "accent" : "neutral"} 
      //@ts-ignore selectState doesn't exist
      selectState={isSelected ? "selected" : "unselected"} >
      <Text style="subtitle">{title}</Text>
    </TabBase>
  )
  // </UndecoratedLink>
}

const TabBase = styled(UndecoratedLink, {
  ...itemStyles,
});

const Trigger = styled(NavigationMenuPrimitive.Trigger, {
  base: {
    all: 'unset',
  },
  ...itemStyles,
});

const Popup = styled(NavigationMenuPrimitive.Content, {
  base: {
    width: {
      base: "100%",
    },
    md: {
      position: 'absolute',
      // top: 0,
      // left: 0,
      backgroundColor: "gray.1",
      width: "fit-content",
      padding: "8px",
      borderRadius: "16px",
      border: "solid 1px token(colors.gray.7)",
      // width: "inherit",
    },
  },
})

function MenuItem({ title, pathname, selectedPath }: LinkProps) {
  const isSelected = pathname == selectedPath
  return (
    <MenuItemBase href={pathname}>
      <Row gap='12px' justify='space-between' align='center' style={{ width: '100%' }}>
        <Text
          style={(isSelected) ? "subtitle" : "body"}
          color={(isSelected) ? "primary" : "secondary"}
        >
          {title}
        </Text>
        {isSelected && <CheckIcon />}
      </Row>
    </MenuItemBase>
  )
}

const MenuItemBase = styled(UndecoratedLink, {
  base: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    padding: "12px 16px",
  
    '&:hover': { backgroundColor: "gray.4", },
    '&:focus': { backgroundColor: "gray.5", },  

    md: {
      borderRadius: "8px",
      minWidth: "196px",
    }
  },
});

const StyledCaret = styled(CaretDownIcon, {
  base: {
    position: 'relative',
    color: "gray.10",
    top: 1,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'transform 250ms ease',
    },
  },
})