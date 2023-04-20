import { ArrowRightIcon } from "@radix-ui/react-icons";
import {Button, styled, UndecoratedA} from "../../common/theme/global";
import {Column, Row} from "../../common/Layouts";
import Text from "../../common/Text";
import { HomeCard } from "../HomeCard";
import Image from "next/image";

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

export function ContentItem({ imageSrc, title, description, link, }: { imageSrc: string, title: string, description?: string, link: string }) {
    return (
            <ContentItemBase href={link} target="_blank" rel="noopener noreferrer">
            <Row gap="16px" align="center">
                <ContentImage
                    src={imageSrc}
                    alt={`thumbnail of ${title}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={0}
                    height={0}
                    size={{ "@initial": "mobile", "@md": "desktop" }}
                    style={{ height: 'auto', borderRadius: '8px', aspectRatio: "calc(16/9)", objectFit: "cover" }}
                />
                <Column gap="4px">
                    <Text style="subtitle" color="primary">{title}</Text>
                    {description !== undefined && <Text style="body" color="secondary" maxLines={2}>{description}</Text>}
                </Column>
            </Row>
        </ContentItemBase>
    )
}

const ContentItemBase = styled(UndecoratedA, {
    margin: "-12px",
    padding: "12px",
    borderRadius: "12px",

    "&:hover": { backgroundColor: "$gray5", },
    "&:focus": { backgroundColor: "$gray6", },
})

const ContentImage = styled(Image, {
    variants: {
        size: {
            mobile: { width: "72px", },
            desktop: { width: "120px", },
        },
    },
})