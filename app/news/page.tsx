"use client"

import Container from "../common/Container";
import { ContentGrid, ContentLayout } from "../common/ContentLayout";
import { ArticleItem } from "./ArticleItem";
import { Rankings, Article } from "./News";
import { allNews } from "./NewsRepository";
import { RankingsItem } from "./RankingsItem";

export default function NewsPage() {
    return (
        <Container>
            <ContentLayout
                content={allNews()}
                element={(year, value) => {
                    const items: (Rankings | Article)[] = [value.rankings, ...value.articles].filter(i => i !== undefined).map(i => i!)
                    return <ContentGrid
                        key={year}
                        year={year}
                        contentName="News"
                        content={items}
                        element={item =>
                            (isArticle(item))
                                ? <ArticleItem key={item.link} article={item} style={value.articles.length > 1 ? "card" : "feature"} />
                                : <RankingsItem key={`${year}rankings`} rankings={item} />
                        }
                    />
                }
                }
            />
        </Container>
    )
}

function isArticle(item: Rankings | Article): item is Article {
    return "headline" in item
}