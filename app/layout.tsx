import './global.css'
import { Inter } from "next/font/google";
import { styled, Column } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import NavigationMenu from './common/navigation/NavigationMenu';
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
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Head/>
      </head>
      <body>
        <Column className={css({ height: '100vh', width: '100vw' })} align="stretch">
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
  base: {
    overflowY: 'scroll',
    width: '-webkit-fill-available',
    height: '-webkit-fill-available',
  },
})