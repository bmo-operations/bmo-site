import { styled, Row } from 'styled-system/jsx';
import { Text } from "../common/theme/global";

export default function InfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <Row gap="16px" align="center">
            {icon}
            <Text style="body">{text}</Text>
        </Row>
    )
}