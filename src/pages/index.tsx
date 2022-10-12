import cls from '@/utils/cls';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIntro(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h1 className={cls('text-2xl text-amber-500', !intro && 'hidden')}>안녕하세요.</h1>
      <h1 className={cls('text-3xl text-amber-500', intro && 'hidden')}>반갑습니다.</h1>
    </div>
  );
};

export default Home;
