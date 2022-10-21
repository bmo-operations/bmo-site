import * as UnstyledNavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';

export default function NavigationMenu() {
    let router = useRouter();
    return (
        <UnstyledNavigationMenu.Root>
            <UnstyledNavigationMenu.List>
                <UnstyledNavigationMenu.Item>

                </UnstyledNavigationMenu.Item>
            </UnstyledNavigationMenu.List>
            <ViewportPosition>
                <NavigationMenuViewport />
            </ViewportPosition>
        </UnstyledNavigationMenu.Root>
    )
}