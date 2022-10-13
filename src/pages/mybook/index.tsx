import postMyPageApi, { postMyPageRes } from '@/api/postMyPageApi';
import StampViewModal from '@/components/MyPage/StampViewModal';
import Header from '@/components/shared/Header';
import cls from '@/utils/cls';
import { useEffect, useState } from 'react';

interface PlaceInfo {
  imageUrl: string;
  stampName?: string;
  shortIntro: string;
}

const MyBook = () => {
  const badgeState = ['스탬프', '뱃지'];
  const [nowCategory, setNowCategory] = useState('스탬프');
  const [open, setOpen] = useState(false);
  const [serverData, setServerData] = useState<postMyPageRes>();
  const [name, setName] = useState('아무개');
  const [nowPlaceInfo, setNowPlaceInfo] = useState<PlaceInfo>();

  useEffect(() => {
    setName(localStorage.getItem('nickname') as string);
    async function getData() {
      const data = await postMyPageApi();
      setServerData(data.data);
    }
    getData();
  }, []);

  return (
    <div className="relative h-fit w-full pb-10">
      <Header headerTitle="MyBook" isBack></Header>
      <section className="relative mx-7 mt-4 rounded-b-2xl shadow-lg shadow-gray-300">
        <div className="absolute left-2 top-1 inline-flex items-center text-white text-opacity-50">
          <img src="/MyBookProfile.png" className="mr-2 h-5 w-5 opacity-50"></img>
          My Book
        </div>
        <img src="/MyPageIndex.png" className="absolute top-0 right-5 h-14 w-6"></img>
        <div className="h-24 rounded-t-2xl bg-black pt-9 pl-5 text-base leading-5 text-white">
          <p>{name}님</p>
          <p>열어본 제주의 속을 확인하세요.</p>
        </div>
        <div className="z-10 flex w-full bg-black">
          {badgeState.map((categary) => (
            <div
              className={cls(
                'flex flex-1 items-center justify-center space-x-1 rounded-t-xl py-2 px-2',
                categary === nowCategory ? 'border-b border-[#AE1E27] bg-white text-[#AE1E27]' : 'bg-black text-gray-500'
              )}
              onClick={() => setNowCategory(categary)}
              key={categary}
            >
              <div>{categary}</div>
              <div
                className={cls(
                  'flex h-5 w-5 items-center justify-center rounded-lg text-sm',
                  categary === nowCategory ? 'bg-[#D91C29] bg-opacity-[16%]' : 'bg-gray-700'
                )}
              >
                {serverData ? (categary === '스탬프' ? serverData?.stampCnt : serverData?.badgeCnt) : 0}
              </div>
            </div>
          ))}
        </div>

        {nowCategory === '스탬프' && (
          <section className="grid grid-cols-3 px-1 pt-6 pb-6">
            {serverData?.stampList.map((elem) => (
              <img
                key={elem.placeId}
                src={elem.stampImageUrl}
                onClick={() => (
                  setNowPlaceInfo({ imageUrl: elem.stampImageUrl, shortIntro: elem.shortDescription, stampName: elem.name }), setOpen(true)
                )}
              ></img>
            ))}
          </section>
        )}
        {nowCategory === '뱃지' && (
          <section className="flex flex-col items-center justify-center space-y-4 py-4">
            {serverData?.badgeList.map((elem) => (
              <img
                key={elem.badgeId}
                src={elem.badgeImageUrl}
                className="aspect-square w-64"
                onClick={() => (
                  setNowPlaceInfo({ imageUrl: elem.badgeImageUrl, shortIntro: elem.description, stampName: '' }), setOpen(true)
                )}
              ></img>
            ))}
          </section>
        )}
      </section>
      {open && (
        <StampViewModal
          title={nowPlaceInfo?.stampName as string}
          description={nowPlaceInfo?.shortIntro as string}
          imageURL={nowPlaceInfo?.imageUrl as string}
          closeModal={() => setOpen(false)}
        ></StampViewModal>
      )}
    </div>
  );
};

export default MyBook;
