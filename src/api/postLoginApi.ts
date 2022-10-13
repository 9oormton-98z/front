import client from './client';

const postLoginApi = ({ nickname }: { nickname: string }) =>
  client.post('/api/v1/auth/login', {
    nickname: nickname,
  });

export default postLoginApi;
