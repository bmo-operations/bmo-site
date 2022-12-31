'use client';

import { Inter } from '@next/font/google';
import { styled } from '../theme/global';
import NavigationMenu from './common/navigation/NavigationMenu';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className={inter.className}>
        <body>
          <NavigationMenu/>
          <ScrollableContent>
            {children}
          </ScrollableContent>
        </body>
      </html>
    );
  }

const ScrollableContent = styled('div', {
  overflowY: 'scroll',
  width: '-webkit-fill-available',
  height: '-webkit-fill-available',
})