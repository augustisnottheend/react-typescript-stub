export interface IResponseGet<R> {
  results: R;
}

interface IErrorData {
  data: string[];
  status: number;
}
export interface IError {
  response: IErrorData;
}
