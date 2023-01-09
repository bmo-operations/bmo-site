import { styled } from "../../theme/global";
import { Column, Row } from "../common/Layouts";
import Text from "../common/Text";
import { ZipsTip } from "./ZipsTip";

export function TipItem({ tip }: { tip: ZipsTip }) {
    return (
        <TipItemBase gap="12px" gapMobile="8px" padding="0px 0px 32px 0px" align="stretch">
            <Row justify="space-between">
                <Text style="subtitle">{tip.title}</Text>
                <Text style="body" color="secondary">{tip.date}</Text>
            </Row>
            <Text style="paragraph">{tip.text}</Text>
        </TipItemBase>
    )
}

const TipItemBase = styled(Column, {
    borderBottom: "solid 1px $gray7"
})