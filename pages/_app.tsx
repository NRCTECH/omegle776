import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import "./globals.css";
import AuthProvider from './Providers';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;