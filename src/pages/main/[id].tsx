import postDetailPageApi, { postDetailPageRes } from '@/api/postDetailPage';
import postVisitApi from '@/api/postVisitApi';
import StampModal from '@/components/Main/StampModal';
import Header from '@/components/shared/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  if (lat1 == lat2 && lon1 == lon2) return 0;

  var radLat1 = (Math.PI * lat1) / 180;
  var radLat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radTheta = (Math.PI * theta) / 180;
  var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
}

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [serverData, setServerData] = useState<postDetailPageRes>();
  const [distance, setDistance] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      if (!router.query.id) return;
      // console.log(router.query.id);
      const detailData = await postDetailPageApi(router.query.id as string);
      console.log(detailData);
      setServerData(detailData.data);
    }
    getData();
  }, [router.query.id]);

  const onStampClick = async () => {
    const result = await postVisitApi({ placeId: serverData?.placeId.toString() as string });
    console.log(result);
    const newData = { ...serverData, stampImageUrl: result.data, visited: true };
    setServerData(newData as postDetailPageRes);
  };

  useEffect(() => {
    if (!serverData) return;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const distance = getDistance(
          position.coords.latitude,
          position.coords.longitude,
          serverData?.latitude as number,
          serverData?.longitude as number
        );
        setDistance(distance);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
    const id = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const distance = getDistance(
            position.coords.latitude,
            position.coords.longitude,
            serverData?.latitude as number,
            serverData?.longitude as number
          );
          setDistance(distance);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    }, 3000);
    return () => clearInterval(id);
  }, [serverData]);

  return (
    <div className="relative h-fit w-full pb-16">
      <Header headerTitle="Logo" isBack isMyBook></Header>
      <section className="relative aspect-square w-full px-12 pt-[62px]">
        <img src={serverData?.placeImageUrlDtoList[0].imageUrl} className="rounded-lg"></img>
        <img src={serverData?.stampImageUrl} className="absolute right-0 bottom-0 h-32 w-32" onClick={() => setOpenModal(true)}></img>
      </section>
      {openModal && (
        <StampModal
          visited={serverData ? serverData?.visited : false}
          imageURL={serverData?.stampImageUrl as string}
          closeModal={() => setOpenModal(false)}
          innerText={serverData?.name as string}
          onStampClick={onStampClick}
          distance={distance}
        ></StampModal>
      )}
      <section className="px-12">
        <h3 className="w-full rounded-md border border-gray-300 py-2 text-center">{serverData?.name}</h3>
        <p className="mt-2 w-full rounded-md border border-gray-300 py-2 px-4 text-center">{serverData?.address}</p>
        <p className="mt-4 w-full rounded-md border border-gray-300 py-2 px-4 text-center">{serverData?.description}</p>
      </section>
    </div>
  );
}

export default Page;
