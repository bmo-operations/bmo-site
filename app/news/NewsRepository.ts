import { NewsYear } from "./News";
import newsData from "../../public/content/news/news.json"

export function allNews(): Map<number, NewsYear> {
    return new Map(Object.entries(newsData).map(e => {
        const year: number = parseInt(e[0])
        const value: NewsYear = e[1]
        return [year, value]
    }))
}