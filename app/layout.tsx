'use client';

import { Inter } from "next/font/google";
import { styled } from './common/theme/global';
import { Column } from './common/Layouts';
import NavigationMenu from './common/navigation/NavigationMenu';
import { globalStyles, getCssText } from './common/theme/global';
import Head from "./head";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Head/>
        {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/> */}
      </head>
      <body>
        <Column style={{ height: '100%', width: '100vw' }} align="stretch">
          <NavigationMenu />
          <ScrollableContent>
            {children}
          </ScrollableContent>
        </Column>
      </body>
    </html>
  );
}

const ScrollableContent = styled('div', {
  overflowY: 'scroll',
  width: '-webkit-fill-available',
  height: '-webkit-fill-available',
})