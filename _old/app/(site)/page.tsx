// 'use client';
// import type { FC } from 'react';
// import { useSession, signIn, signOut } from 'next-auth/react';

// const Home: FC = () => {
//   const { data, status } = useSession();

//   if (status === 'loading') return <p>Loading...</p>;

//   if (data) {
//     return (
//       <div>
//         <p>User: {data.user?.name}</p>
//         <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
//       </div>
//     );
//   }

//   return <button onClick={() => signIn('github')}>Sign In</button>;
// }

// export default Home;
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
