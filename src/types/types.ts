export type searchByTitleType = {
    imdbID: string,
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    Response: string,
    Error: string
} 

export type searchByIDType = {
    Title: string,
    Year: string,
    Plot: string,
    Poster: string,
    Type: string
    Response: string,
    Error: string
} 


export type payloadTypeInSearchByTitle = {
    loading: boolean,
    error: boolean,
    result: searchByTitleType[]
}

export type payloadTypeInSearchById = {
    loading: boolean,
    error: boolean,
    result: searchByIDType 
} 