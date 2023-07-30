import { styled } from "styled-system/jsx"
import { Container } from "../common/Container";

export default function HomeCardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <HomeGrid>
                {children}
            </HomeGrid>
        </Container>
    );
}

const HomeGrid = styled('div', {
    base: {
        display: 'grid',
        gridTemplateColumns: {
            base: "1fr",
            lg: "1fr 1fr",
        },
        rowGap: {
            base: "24px",
            md: "48px",
        },
        columnGap: {
            base: "24px",
            md: "48px",
        }
    },
})