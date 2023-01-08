import { styled } from "../../../theme/global"
import Text from "../../common/Text"
import { HomeCard } from "../HomeCard"

export default function TextCard({ title, text }: { title: string, text: string }) {
    return (
        <AboutCardLayout size={{ '@initial': "mobile", '@md': "desktop" }}>
            <Text style='h3'>{title}</Text>
            <Text style='body'>{text}</Text>
        </AboutCardLayout>
    )
}

const AboutCardLayout = styled(HomeCard, {
    background: '$gray3',
})