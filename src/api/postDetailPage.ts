import { AxiosResponse } from 'axios';
import client from './client';

export interface postDetailPageRes {
  placeId: number;
  name: string;
  description: string;
  shortDescription: string;
  stampImageUrl: string;
  starSum: number;
  visitorNumber: number;
  starAvg: number;
  latitude: number;
  longitude: number;
  address: string;
  source: string;
  visited: boolean;
  placeImageUrlDtoList: { orderNum: number; imageUrl: string }[];
}

const postDetailPageApi = (placeIdx: string): Promise<AxiosResponse<postDetailPageRes>> => {
  const name = localStorage.getItem('nickname');
  return client.post(`/api/v1/place/${placeIdx}`, {
    nickname: name as string,
  });
};
export default postDetailPageApi;
