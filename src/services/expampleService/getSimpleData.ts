import agent from '../../agent';

const getSimpleData = (number: number) => agent.GET(`/posts/${number}`);

export default getSimpleData;
