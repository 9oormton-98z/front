import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface HeaderProps {
  headerTitle: string;
  isBack?: boolean;
  isMyBook?: boolean;
}

export default function Header({ headerTitle, isBack, isMyBook }: HeaderProps) {
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };
  const onMyBookClick = () => {
    router.push('/mybook');
  };
  useEffect(() => {});

  return (
    <>
      {/* 맨 위에 덮어두기 용도다. */}
      <div className="pt-[34px]"></div>
      <nav className="grid h-[64px] grid-cols-[1fr_3fr_1fr]">
        {isBack && (
          <div className="col-start-1 flex items-center justify-start pl-5">
            <ChevronLeftIcon className="h-6 w-6" onClick={onBackClick}></ChevronLeftIcon>
          </div>
        )}
        <h2 className="col-start-2 flex items-center justify-center">
          <img src="/HeaderLogo.png" className="h-14 w-36"></img>
        </h2>
        {isMyBook && (
          <div className="col-start-3 flex items-center justify-end pr-5">
            <img src="/MyBook.png" className="h-8 w-8" onClick={onMyBookClick} />
          </div>
        )}
      </nav>
    </>
  );
}
