import agent from 'agent';
import { IDataResponse } from './types';

const sendSimpleData = (data: IDataResponse) => agent.POST('/example', data);

export default sendSimpleData;
