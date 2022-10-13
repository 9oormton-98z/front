import { AxiosResponse } from 'axios';
import client from './client';

export interface getPlaceListRes {
  placeId: number;
  name: string;
  shortDescription: string;
  stampImageUrl: string;
  placeImageUrl: string;
  latitude: number;
  longitude: number;
}

const postPlaceListApi = (): Promise<AxiosResponse<getPlaceListRes[]>> => {
  const data = localStorage.getItem('nickname') as string;
  return client.post('/api/v1/place', { nickname: data });
};

export default postPlaceListApi;
