import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSimpleData } from 'store/simple/actions';
import { getSimpleFirstState, getSimpleSecondState } from 'store/simple/getters';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const first = useSelector(getSimpleFirstState);
  const second = useSelector(getSimpleSecondState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSimpleData({
        exampleFirst: 'Hello, ',
        exampleSecond: 'welcome to The React TS Boilerplate!',
      })
    );
  }, [dispatch]);

  return <div className={styles.mainTheme}>{`${first} ${second}`}</div>;
};

export default Main;
