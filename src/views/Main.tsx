import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getSimpleData, sendSimpleData } from 'services';
import { IDataResponse } from 'services/exampleService/types';
import useApiTest from 'services/hook/useApiTest';
import useApiPost from 'services/hook/useApiPost';
import { setSimpleData } from 'store/simple/actions';
import { getSimpleFirstState, getSimpleSecondState } from 'store/simple/getters';
import useApi from 'services/hook/useApi';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  const first = useSelector(getSimpleFirstState);
  const second = useSelector(getSimpleSecondState);
  const dispatch = useDispatch();

  // const [result, fetchData] = useApiTest<IDataResponse>({
  //   fetch: getSimpleData,
  //   query: `${counter}`,
  // });

  // const [sendResult, sendData] = useApi(
  //   {
  //     fetch: sendSimpleData,
  //     query: counter,
  //     payload: counter2,
  //   },
  //   [counter2]
  // );

  const [resultPost, postData] = useApiPost<IDataResponse, IDataResponse>({
    fetch: sendSimpleData,
    // query: `${counter}`,
  });

  useEffect(() => {
    dispatch(
      setSimpleData({
        exampleFirst: 'Hello, ',
        exampleSecond: 'welcome to The React TS Boilerplate!',
      })
    );
  }, [dispatch]);

  const onClick = (e: any) => setCounter((state) => state + 1);

  const [fetchTestResult, fetchTest] = useApi({
    fetch: getSimpleData,
    query: `${counter}`,
  });

  return (
    <div className={styles.mainTheme}>
      {`${first} ${second}`}
      <br />
      <p>{counter}</p>
      <button onClick={onClick} type="button">
        Плюс
      </button>
      <br />
      <br />
      {/* {result.isLoading && 'loading bitch'} */}
      <br />
      {/* {result.response?.id} */}
      <br />
      <br />
      <br />

      <button type="button" onClick={() => setCounter2((state) => state + 2)}>
        send data {counter2}
      </button>
    </div>
  );
};

export default Main;
