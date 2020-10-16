import agent from 'agent';
import { AxiosResponse } from 'axios';
import { useState, useCallback, useEffect } from 'react';

interface IErrorData {
  data: string[];
  status: number;
}
export interface IError {
  response: IErrorData;
}

type Response<R> = R | undefined;
type ResponseError = IError | undefined;

interface IProps<R = object, T = object> {
  fetch: (params: string) => Promise<AxiosResponse<R>>;
  query?: string;
}

interface IFullResponse<R> {
  isLoading: boolean;
  response: Response<R>;
  error: ResponseError;
}

const useApi = <R = any, T = object>({
  fetch,
  query = '',
}: IProps<R>): [IFullResponse<R>, (data?: T, params?: string) => void] => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response<R>>();
  const [error, setError] = useState<ResponseError>();

  const fetchData = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const result = await fetch(query || data);
        setResponse(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [fetch, query]
  );

  return [{ isLoading, response, error }, fetchData];
};

export default useApi;
