import BaseHellfish from "../../public/images/BlackHellfish.svg"
import { styled, Column } from "styled-system/jsx";
import { Text } from "../common/theme/global"

export default function LandingHeader() {
    return (
        <Column gap="xl" padding="72px 0px 0px 0px">
            {/* <Hellfish size={{ '@initial': 'mobile', '@md': 'desktop' }} /> */}
            <Column gap="md">
                <Text style="h1" color="accent">Brownian <br /> Motion</Text>
                <Text style="h6" color="accent">Brown University Men’s Club Ultimate</Text>
            </Column>
        </Column>
    )
}

// const Hellfish = styled(BaseHellfish, {
//     base: {
//         width: 144,
//         fill: 'red.11',
//     },
//     variants: {
//         size: {
//             mobile: { width: 64 },
//             desktop: { width: 144 },
//         }
//     }
// })