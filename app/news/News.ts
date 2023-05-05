export interface NewsYear {
    rankings?: Rankings,
    articles: Article[],
}

export interface Rankings {
    ultiworld: number,
    usaultimate: number,
}

export interface Article {
    image: string,
    headline: string,
    dropline?: string,
    text: string,
    link: string,
}