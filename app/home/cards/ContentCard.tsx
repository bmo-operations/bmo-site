import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, styled } from "../../common/theme/global";
import { Row } from "../../common/Layouts";
import Text from "../../common/Text";
import { HomeCard } from "../HomeCard";

export function ContentCard({ title, onMore, children, spanDesktop }: { title: string, onMore: () => void, children: React.ReactNode, spanDesktop?: number }) {
    return (
        <ContentCardBase align="stretch" spanDesktop={spanDesktop}>
            <Row justify="space-between" align="center" gap="16px">
                <Text style="h3">{title}</Text>
                <MoreButton onClick={onMore} />
            </Row>
            {children}
        </ContentCardBase>
    )
}

const ContentCardBase = styled(HomeCard, {
    backgroundColor: "$gray3",
})

function MoreButton({ onClick }: { onClick: () => void }) {
    return <MoreButtonBase size={{ '@initial': 'mobile', '@md': 'desktop' }} onClick={e => onClick()}>
        <Text style="subtitle">More</Text>
        <ArrowRightIcon />
    </MoreButtonBase>
}

const MoreButtonBase = styled(Button, {
    borderRadius: '9999px',
    border: "solid 1px $gray7",
})