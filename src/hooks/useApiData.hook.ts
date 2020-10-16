import { useState, useCallback } from 'react';
import agent from '../agent';
import { IError } from './types';

type Method = keyof typeof agent;
type Response<R> = R | undefined;
type ResponseError = IError | undefined;

interface IProps {
  method: Method;
  url: string;
}

interface IFullResponse<R> {
  isLoading: boolean;
  response: Response<R>;
  error: ResponseError;
}

const useApiData = <R = any, T = object>(
  props: IProps
): [IFullResponse<R>, (data?: T, params?: string) => void] => {
  const { method, url } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response<R>>();
  const [error, setError] = useState<ResponseError>();

  const fetchData = useCallback(
    async (data, params) => {
      try {
        setIsLoading(true);
        // types
        const result = await agent[method](params ? url + params : url, data);
        setResponse(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [method, url]
  );

  return [{ isLoading, response, error }, fetchData];
};

export default useApiData;
