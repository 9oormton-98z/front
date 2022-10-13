import MapContainer from '@/components/Main/Map';
import Header from '@/components/shared/Header';
import { NextPage } from 'next';
import cls from '@/utils/cls';
import { useEffect, useState } from 'react';
import getPlaceListApi, { getPlaceListRes } from '@/api/postPlaceListApi';
import RightIcon from '@/components/Icon/RightIcon';
import { useRouter } from 'next/router';

const Main: NextPage = () => {
  const router = useRouter();
  const [placeId, setPlaceId] = useState<number>(0);
  const [placeList, setPlaceList] = useState<getPlaceListRes[]>();

  useEffect(() => {
    async function getData() {
      const data = await getPlaceListApi();
      console.log(data);
      setPlaceList(data.data);
    }
    getData();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-y-hidden">
      <Header headerTitle="Logo" isMyBook></Header>
      <article className="flex h-[calc(100%-98px)] items-center justify-center bg-gray-100">
        <MapContainer placeList={placeList} setPlace={(id: number) => setPlaceId(id)}></MapContainer>
      </article>
      <article
        className={cls('absolute inset-x-0 bottom-0 z-10 flex h-44 rounded-t-3xl bg-white px-7 py-9')}
        onClick={() => {
          if (placeId === 0) return;
          router.push('./main/' + placeId);
        }}
      >
        {placeId === 0 ? (
          <div className="mr-4 flex h-full basis-28 items-center justify-center rounded-md bg-gray-300">
            <img src="/DefaultContents.png" className="h-12 w-16"></img>
          </div>
        ) : (
          <div className="relative mr-4 h-full basis-28 rounded-md">
            <img
              src={placeList?.filter((elem) => elem.placeId === placeId).map((elem) => elem.placeImageUrl)[0]}
              className="h-full w-full rounded-md"
            ></img>
            <img
              src={placeList?.filter((elem) => elem.placeId === placeId).map((elem) => elem.stampImageUrl)[0]}
              className="absolute -right-3 -bottom-3 h-10 w-10"
            ></img>
          </div>
        )}
        <div className="bg- flex h-full flex-1 flex-col items-center justify-center rounded-md bg-[#191929] px-4 text-sm text-white">
          {placeId === 0 ? (
            <>
              <p>지도에서</p>
              <p>유적지를 선택해주세요.</p>
            </>
          ) : (
            <p>{placeList?.filter((elem) => elem.placeId === placeId).map((elem) => elem.shortDescription)[0]}</p>
          )}
        </div>
        <RightIcon></RightIcon>
      </article>
    </div>
  );
};

export default Main;
