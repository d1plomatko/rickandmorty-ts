export interface IApi<T> {
    info : {
        count: number,
        next: string | null,
        pages: number,
        prev: null | string
    },
    results: T
}