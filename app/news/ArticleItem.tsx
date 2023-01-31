import Image from "next/image";
import { Button, styled, UndecoratedA } from "../common/theme/global";
import { Column } from "../common/Layouts";
import Text from "../common/Text";
import { Article } from "./News";

export function ArticleItem({ article, style }: { article: Article, style?: "card" | "feature" }) {
    return (
        <ArticleItemBase gap="16px" align="stretch" style={style}>
            <Image
                src={article.image}
                alt={`Image for ${article.headline}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto', borderRadius: '16px', aspectRatio: "calc(16/9)", objectFit: "cover" }}
            />
            <Column gap="8px">
                <Text style="subtitle">{article.headline}</Text>
                {article.dropline !== undefined && <Text style="subtitle" color="secondary">{article.dropline}</Text>}
                <Text style="paragraph" color="secondary" maxLines={style == "card" ? 4 : 12}>{article.text}</Text>
            </Column>
            {article.link !== undefined &&
                <UndecoratedA href={article.link} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
                    <Button size={{ '@initial': 'mobile', '@md': 'desktop' }} style={{ width: "100%" }}>
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