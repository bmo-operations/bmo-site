import { styled, Row, Column } from 'styled-system/jsx';
import { Text } from "../common/theme/global";
import { ZipsTip } from "./ZipsTip";

export function TipItem({ tip, style }: { tip: ZipsTip, style?: "default" | "tipCard" }) {
    return (
        <TipItemBase
            gap="sm"
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
            default: { borderBottom: "solid 1px token(colors.gray.7)" },
            tipCard: { borderTop: "solid 1px token(colors.gray.7)" },
        },
    },

    defaultVariants: {
        style: 'default',
    },
})