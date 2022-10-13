import client from './client';

const postVisitApi = ({ placeId }: { placeId: string }) => {
  const data = { nickname: localStorage.getItem('nickname') as string };
  return client.post('/api/v1/place/visit' + '/' + placeId, data);
};

export default postVisitApi;
