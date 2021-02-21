export interface IHttpException extends Error {
  status: number,
}

export default class HttpException extends Error {
  public status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status ? status : 500
  }
}
