import Image from "next/image"
import { Heading1, Heading6, styled } from "../../theme/global"

export default function LandingHeader() {
    return (
        <LandingLayout>
            <Image src="/images/hellfish-red.png" width={144} height={144} alt="Hellfish logo"/>
            <LandingText>
                <Heading1>{'Brownian Motion'}</Heading1>
                <Heading6>{'Brown University Men’s Club Ultimate'}</Heading6>
            </LandingText>
        </LandingLayout>
    )
}

const LandingLayout = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
})

const LandingText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    color: "$red11",
})