import { Row } from "../common/Layouts";

export default function InfoItem({ icon, text }: {icon: React.ReactNode, text: string }) {
    return (
        <Row gap="16px" align="center">
            {icon}
            <p>{text}</p>
        </Row>
    )
}