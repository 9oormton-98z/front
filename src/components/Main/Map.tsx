import { getPlaceListRes } from '@/api/postPlaceListApi';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapContainer({
  placeList,
  setPlace,
}: {
  placeList: getPlaceListRes[] | undefined;
  setPlace: (placeId: number) => void;
}) {
  useEffect(() => {
    if (!placeList) return;

    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${'c102dfef8f2c0840a26ee8a65d975980'}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.4703481431908, 126.826301683464),
        };
        const map = new window.kakao.maps.Map(container, options);
        placeList.map((elem) => {
          let imageSrc = './Mappin.png';
          let imageSize = new window.kakao.maps.Size(32, 35);
          let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
          const latlng = new window.kakao.maps.LatLng(elem.latitude, elem.longitude);
          const marker = new window.kakao.maps.Marker({
            map: map,
            title: elem.name,
            position: latlng,
            image: markerImage,
          });
          window.kakao.maps.event.addListener(marker, 'click', () => {
            const latlng = new window.kakao.maps.LatLng(elem.latitude, elem.longitude);
            map.panTo(latlng);
            map.setZoomable(latlng);
            setPlace(elem.placeId);
          });
        });
        map.setLevel(9);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [placeList]);

  return <div id="map" className="h-full w-full grayscale-[0.3]" />;
}
