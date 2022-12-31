import { Container, styled } from "../../theme/global";

export default function HomeCardLayout({children}: {children: React.ReactNode}) {
    return (
        <Container>
            <HomeGrid 
                size={{
                    '@sm': 'oneColumn',
                    '@lg': 'twoColumns',
                }}
            >
                {children}
            </HomeGrid>
        </Container>
    );
}

const HomeGrid = styled('div', {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr',

    variants: {
        size: {
            oneColumn: {
                gridTemplateColumns: '1fr',
                rowGap: '24px',
                padding: '24px',
            },
            twoColumns: {
                gridTemplateColumns: '1fr 1fr',
                rowGap: '48px',
                columnGap: '48px',
                padding: '48px',
            },
        },
    },
})