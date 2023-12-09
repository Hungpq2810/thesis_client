export interface IBaseResponse<T> {
    statusCode: number,
    data: T,
    message: string
}
export interface IRequestParam {
    id?: number,
    page?: number,
    pageSize?: number,
    pageIndex?: number,
    [key: string]: any
}