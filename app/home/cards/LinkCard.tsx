import { UndecoratedA } from "../../common/theme/global";
import { Text } from "../../common/theme/global";
import { HomeCard } from "../HomeCard";
import { styled, Column, Row } from "styled-system/jsx";
import { css } from "styled-system/css";
import { ArrowRight } from "phosphor-react";

export interface LinkInfo {
    icon?: React.ReactNode,
    text?: string,
    textNode?: React.ReactNode,
    description?: string,
    colorPalette: string[],
    onClick?: () => void,
    link?: string,
}

export function LinkCard({ title, description, links, spanDesktop }: { title: string, description?: string, links: LinkInfo[], spanDesktop?: number }) {
    return (
        <LinkCardBase gap="lg" style="outlined" align="stretch" spanDesktop={spanDesktop == 2 ? "two" : "one"}>
            <Text style="h3">{title}</Text>
            <Column gap="md" align="stretch" className={css({ height: '100%', })}>
                {links.map(info => <LinkItem key={info.text} info={info} />)}
            </Column>
        </LinkCardBase>
    )
}

const LinkCardBase = styled(HomeCard, {
    base: {
        height: '100%',
        boxSizing: "border-box",
    },
    variants: {
        style: {
            outlined: {
                border: "solid 1px token(colors.gray.5)",
            },
            filled: {
                backgroundColor: "gray.a.3",
            },
        },
    }
})

export function LinkItem({ info }: { info: LinkInfo }) {
    const content = (
        <LinkItemBase
            align="end"
            padding="lg"
            style={{
                color: info.colorPalette[10],
                backgroundColor: info.colorPalette[2],
            }}
            link={info.link != undefined || info.onClick != undefined }
            onClick={e => { if (info.onClick != undefined) info.onClick() }}
        >
            <Row align="center" gap="16px" className={css({ width: "100%", height: "fit-content", fontSize: "18px"})}>
                {info.icon != undefined && info.icon}
                <Column
                    gap="4px"
                    style={{ flex: "1 4 fit-content", }}>
                    { info.text != undefined && <Text style="subtitle">{info.text}</Text> }
                    { info.textNode != undefined && info.textNode }
                    {info.description != undefined && <Text style="body">{info.description}</Text>}
                </Column>
                <div style={{ flexGrow: 1 }} />
                { (info.link != undefined || info.onClick != undefined) && <ArrowRight /> }
            </Row>
        </LinkItemBase >
    )
    return (info.link != undefined)
        ? (<LinkA href={info.link} target="_blank" rel="noopener noreferrer">
            {content}
        </LinkA>)
        : content
}

const LinkItemBase = styled(Row, {
    base: {
        height: '100%',
        boxSizing: "border-box",
        width: '100%',
        borderRadius: "lg",
    },


    variants: {
        link: {
            true: { cursor: 'pointer', },
            false: {},
        }
    },
})

const LinkA = styled(UndecoratedA, {
    base: {
        height: '100%',
        boxSizing: "border-box",
        width: '100%',
        display: 'flex',
        justifyContent: 'stretch',
    }
})