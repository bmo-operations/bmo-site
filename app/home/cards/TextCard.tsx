import { styled } from "../../common/theme/global"
import Text from "../../common/Text"
import { HomeCard } from "../HomeCard"

export default function TextCard({ title, text }: { title: string, text: string }) {
    return (
        <AboutCardLayout>
            <Text style='h3'>{title}</Text>
            <Text style='paragraph'>{text}</Text>
        </AboutCardLayout>
    )
}

const AboutCardLayout = styled(HomeCard, {
    background: '$gray3',
})