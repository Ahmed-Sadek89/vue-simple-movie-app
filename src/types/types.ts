export type searchResultObject = {
    imdbID: string,
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
} | null
  
export type searchResultType = {
    Error: string,
    Search: searchResultObject[]
} | null

export type detailType = {
    Title: string,
    Year: string,
    Plot: string,
    Poster: string,
    Type: string
}
  