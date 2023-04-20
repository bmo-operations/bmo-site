import Image from "next/image"
import { styled } from "../common/theme/global"
import BaseHellfish from "../../public/images/BlackHellfish.svg"
import { Column } from "../common/Layouts"
import Text from "../common/Text"

export default function LandingHeader() {
    return (
        <Column gap="32px" gapMobile="16px" padding="72px 0px 0px 0px">
            <Hellfish size={{ '@initial': 'mobile', '@md': 'desktop' }} />
            <Column gap="16px" gapMobile="8px">
                <Text style="h1" color="accent">Brownian <br /> Motion</Text>
                <Text style="h6" color="accent">Brown University Men’s Club Ultimate</Text>
            </Column>
        </Column>
    )
}

const Hellfish = styled(BaseHellfish, {
    width: 144,
    fill: '$red11',

    variants: {
        size: {
            mobile: { width: 64 },
            desktop: { width: 144 },
        }
    }
})