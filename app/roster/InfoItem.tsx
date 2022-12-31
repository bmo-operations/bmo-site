import { Text } from "../../theme/global";
import { Row } from "../common/Layouts";

export default function InfoItem({ icon, text }: {icon: React.ReactNode, text: string }) {
    return (
        <Row gap="16px" align="center">
            {icon}
            <Text>{text}</Text>
        </Row>
    )
}