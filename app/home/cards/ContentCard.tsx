import { ArrowRightIcon } from "@radix-ui/react-icons";
import {Button, Text, UndecoratedA} from "../../common/theme/global";
import { styled, Column, Row } from "styled-system/jsx";
import { css } from "styled-system/css";
import { HomeCard } from "../HomeCard";
import Image from "next/image";

export function ContentCard({ title, onMore, children, spanDesktop }: { title: string, onMore: () => void, children: React.ReactNode, spanDesktop?: "one" | "two" | undefined }) {
    return (
        <ContentCardBase align="stretch" spanDesktop={spanDesktop}>
            <Row justify="space-between" align="center" gap="16px">
                <Text style="h3">{title}</Text>
                <MoreButton onClick={onMore} />
            </Row>
            <Column gap="lg" align="stretch">
                {children}
            </Column>
        </ContentCardBase>
    )
}

const ContentCardBase = styled(HomeCard, {
    base: {
        backgroundColor: "gray.3",
    }
})

function MoreButton({ onClick }: { onClick: () => void }) {
    return <MoreButtonBase onClick={e => onClick()}>
        <Text style="subtitle">More</Text>
        <ArrowRightIcon />
    </MoreButtonBase>
}

const MoreButtonBase = styled(Button, {
    base: {
        borderRadius: '9999px',
        border: "solid 1px token(colors.gray.7)",
    }
})

export function ContentItem({ imageSrc, title, description, link, }: { imageSrc: string, title: string, description?: string, link: string }) {
    return (
            <ContentItemBase href={link} target="_blank" rel="noopener noreferrer">
            <Row gap="16px" align="center">
                <Image
                    src={imageSrc}
                    alt={`thumbnail of ${title}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={0}
                    height={0}
                    className={css({ 
                        height: 'auto', 
                        borderRadius: '8px', 
                        aspectRatio: "calc(16/9)", 
                        objectFit: "cover",
                        width: {
                            base: "72px",
                            md: "120px",
                        }
                    })}
                />
                <Column gap="4px">
                    <Text style="subtitle" color="primary" maxLines="one">{title}</Text>
                    {description !== undefined && 
                        <Text 
                            style="body" 
                            color="secondary"
                            maxLines="two">
                            {description}
                        </Text>
                    }
                </Column>
            </Row>
        </ContentItemBase>
    )
}

const ContentItemBase = styled(UndecoratedA, {
    base: {
        margin: "-12px",
        padding: "12px",
        borderRadius: "12px",
    
        "&:hover": { backgroundColor: "gray.5", },
        "&:focus": { backgroundColor: "gray.6", },    
    }
})