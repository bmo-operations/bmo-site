import { ArrowRightIcon } from "@radix-ui/react-icons";
import { styled, UndecoratedA } from "../../common/theme/global";
import { Column, Row } from "../../common/Layouts";
import Text from "../../common/Text";
import { HomeCard } from "../HomeCard";

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
        <LinkCardBase style="outlined" align="stretch" gap="32px" gapMobile="24px" spanDesktop={spanDesktop}>
            <Text style="h3">{title}</Text>
            <Column gap="16px" gapMobile="12px" align="stretch" style={{ height: '100%', }}>
                {links.map(info => <LinkItem key={info.text} info={info} />)}
            </Column>
        </LinkCardBase>
    )
}

const LinkCardBase = styled(HomeCard, {
//    height: '-webkit-fill-available',
    height: '100%',
    boxSizing: "border-box",

    variants: {
        style: {
            outlined: {
                border: "solid 1px $gray7",
            },
            filled: {
                backgroundColor: "$gray3",
            },
        },
    }
})

export function LinkItem({ info }: { info: LinkInfo }) {
    const content = (
        <LinkItemBase
            align="flex-end"
            size={{ '@initial': 'mobile', '@md': 'desktop' }}
            padding="24px"
            paddingMobile="16px"
            style={{
                color: info.colorPalette[10],
                backgroundColor: info.colorPalette[2],
            }}
            justify="stretch"
            link={info.link != undefined || info.onClick != undefined }
            onClick={e => { if (info.onClick != undefined) info.onClick() }}
        >
            <Row align="center" gap="16px" style={{ width: '100%' }}>
                {info.icon != undefined && info.icon}
                <Column
                    gap="4px"
                    style={{
                        flex: "1 4 fit-content",
                    }}>
                    { info.text != undefined && <Text style="subtitle">{info.text}</Text> }
                    { info.textNode != undefined && info.textNode }
                    {info.description != undefined && <Text style="body">{info.description}</Text>}
                </Column>
                <div style={{ flexGrow: 1 }} />
                { (info.link != undefined || info.onClick != undefined) && <ArrowRightIcon /> }
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
//    height: '-webkit-fill-available',
    height: '100%',
    boxSizing: "border-box",
//    width: '100%',
    width: 'stretch',

    variants: {
        size: {
            mobile: {
                borderRadius: '16px',
            },
            desktop: {
                borderRadius: '24px',
            },
        },
        link: {
            true: { cursor: 'pointer', },
            false: {},
        }
    },
})

const LinkA = styled(UndecoratedA, {
    height: '100%',
    boxSizing: "border-box",
    width: '100%',
    display: 'flex',
    justifyContent: 'stretch',
})