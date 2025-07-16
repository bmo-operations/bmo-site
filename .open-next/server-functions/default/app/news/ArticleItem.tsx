import Image from "next/image";
import { Button, Text, UndecoratedA } from "../common/theme/global";
import { styled, Column } from "styled-system/jsx";
import { Article } from "./News";

export function ArticleItem({ article, year, style }: { article: Article, year: number, style?: "card" | "feature" }) {
    return (
        <ArticleItemBase gap="16px" align="stretch" style={style}>
            <Image
                src={`/content/news/${year}/${article.image}`}
                alt={`Image for ${article.headline}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto', borderRadius: '16px', aspectRatio: "calc(16/9)", objectFit: "cover" }}
            />
            <Column gap="8px">
                <Text style="subtitle">{article.headline}</Text>
                {article.dropline !== undefined && <Text style="subtitle" color="secondary">{article.dropline}</Text>}
                <Text style="paragraph" color="secondary" maxLines={style == "card" ? "four" : "twelve"}>{article.text}</Text>
            </Column>
            {article.link !== undefined &&
                <UndecoratedA href={article.link} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
                    <Button style={{ width: "100%" }}>
                        <Text style="subtitle" color="secondary">Full Recap</Text>
                    </Button>
                </UndecoratedA>
            }
        </ArticleItemBase>
    )
}

const ArticleItemBase = styled(Column, {
    variants: {
        style: {
            card: {},
            feature: {
                gridColumnEnd: "span 2",
            },
        },
    },
    defaultVariants: {
        style: "card",
    }
})