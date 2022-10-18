import postLoginApi from '@/api/postLoginApi';
import cls from '@/utils/cls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function IntroPage() {
  const router = useRouter();
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIntro(false);
      console.log(intro);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const { register, handleSubmit } = useForm<{ nickname: string }>();

  const onSubmit = async (data: { nickname: string }) => {
    const myData = await postLoginApi(data);
    console.log(myData);
    localStorage.setItem('nickname', data.nickname);
    router.push('/main');
  };
  const onError = (error: any) => console.log(error);

  return (
    <div className="h-screen w-full flex-col bg-white pt-72 text-black">
      <article className="flex items-center justify-center">
        <motion.div initial={{ opacity: 0.2, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <img src="/MainLogo.png" className="h-32 w-40"></img>
        </motion.div>
      </article>
      {!intro && (
        <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <form className="relative m-auto mt-6 flex h-fit w-72 items-stretch justify-center" onSubmit={handleSubmit(onSubmit, onError)}>
            <input
              className={cls(
                'w-full rounded-md border border-gray-300 py-2.5 pl-4 shadow-sm outline-none',
                'text-base text-[#525463]',
                'placeholder:text placeholder:text-gray-400',
                'focus:border-[#AE1E27] focus:ring-0'
              )}
              placeholder="닉네임을 입력하세요"
              autoComplete="off"
              {...register('nickname')}
            ></input>
            <button type="submit" className="absolute top-0 right-0 h-full rounded-r-md  bg-[#D91C29] bg-opacity-[51%] px-5 text-white">
              GO!
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
