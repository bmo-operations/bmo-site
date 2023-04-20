import { styled } from "../common/theme/global";
import { Column, Row } from "../common/Layouts";
import Text from "../common/Text";
import { ZipsTip } from "./ZipsTip";

export function TipItem({ tip, style }: { tip: ZipsTip, style?: "default" | "tipCard" }) {
    return (
        <TipItemBase
            gap="12px"
            gapMobile="8px"
            padding={(style == "tipCard") ? "24px 0px 0px 0px" : "0px 0px 32px 0px"}
            align="stretch"
            style={style}
        >
            <Row justify="space-between">
                <Text style="subtitle">{tip.title}</Text>
                <Text style="body" color="secondary">{tip.date}</Text>
            </Row>
            <Text style="paragraph">{tip.text}</Text>
        </TipItemBase>
    )
}

const TipItemBase = styled(Column, {
    variants: {
        style: {
            default: { borderBottom: "solid 1px $gray7" },
            tipCard: { borderTop: "solid 1px $gray7" },
        },
    },

    defaultVariants: {
        style: 'default',
    },
})