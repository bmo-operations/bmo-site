import { Article, NewsYear } from "./News";
import newsData from "../../public/content/news/news.json"

export function allNewsYears(): Map<number, NewsYear> {
    return new Map(Object.entries(newsData).map(e => {
        const year: number = parseInt(e[0])
        const value: NewsYear = e[1]
        return [year, value]
    }))
}

export function allNews(amount?: number): [Article, number][] {
    const out: [Article, number][] = []
    allNewsYears().forEach((yearData, year) => {
        const flattened = yearData.articles.map(a => {
            const tuple: [Article, number] = [a, year]
            return tuple
        })
        out.push(...flattened)
    })
    out.sort((a, b) => b[1] - a[1]) //sort in descending year order
    return out.slice(0, amount)
}