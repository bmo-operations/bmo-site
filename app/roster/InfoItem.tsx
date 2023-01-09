import { Row } from "../common/Layouts";
import Text from "../common/Text";

export default function InfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <Row gap="16px" align="center">
            {icon}
            <Text style="body">{text}</Text>
        </Row>
    )
}