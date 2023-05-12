import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Layout from '../layout/default';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const router = useRouter()
  
  if(router.pathname === '/login') {
    return <Component {...pageProps} />
  }
  
  return <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
}

export default MyApp
