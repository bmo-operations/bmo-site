import Image from "next/image";
import { styled } from "../common/theme/global";
import { Column, Row } from "../common/Layouts";
import Text from "../common/Text";
import { Rankings } from "./News";

export function RankingsItem({ rankings }: { rankings: Rankings }) {
    return (
        <RankingsItemBase padding="24px" gap="24px" align="stretch">
            <Text style="subtitle" color="secondary">Rankings</Text>
            <RankingSourceItem
                imageSrc="/images/ultiworld.jpg"
                name="Ultiworld"
                rank={rankings.ultiworld}
                link="https://ultiworld.com/college-rankings/#college-d-i-mens" />
            <RankingSourceItem
                imageSrc="/images/usau.jpg"
                name="USA Ultimate"
                rank={rankings.usaultimate}
                link="https://play.usaultimate.org/teams/events/team_rankings/?RankSet=College-Men" />
        </RankingsItemBase>
    )
}

const RankingsItemBase = styled(Column, {
    borderRadius: "24px",
    border: "solid 1px $gray7",
    height: "fit-content",
})

function RankingSourceItem({ imageSrc, name, rank, link }: { imageSrc: string, name: string, rank: number, link: string }) {
    return (
        <Row gap="16px" align="center">
            <Image src={imageSrc} alt={`${name} logo`} width={40} height={40} />
            <Text style="subtitle">{name}</Text>
            <RankCircle justify="center" align="center">
                <Text style="subtitle" color="secondary">#</Text>
                <Text style="subtitle" color="primary">{`${rank}`}</Text>
            </RankCircle>
        </Row>
    )
}

const RankCircle = styled(Row, {
    width: "40px",
    height: "40px",
    borderRadius: "24px",
    backgroundColor: "$gray3",
})