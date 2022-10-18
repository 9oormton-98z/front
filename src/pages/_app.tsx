import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="m-auto max-w-[420px] shadow-lg">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
