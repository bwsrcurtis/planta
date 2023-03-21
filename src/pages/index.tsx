import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

function HomePage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const { data: session } = useSession();

  function fadeIn() {
    setHasLoaded(true);
  };
  if (session) {
    return (
      <>
        <Head>
          <title>Gardienne</title>
        </Head>
        <div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
          <Image alt='Plant Logo Image' src='/potted-plant-icon.png'
            width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
          <h2>Welcome to Gardienne!</h2>
          <p>Plantcare Made Easy</p>
          <Link href='/plants' passHref={true}>
            <Button name='Enter Your Garden'></Button></Link>
        </div>
      </>);
  }
  return (
    <>
      <Head>
        <title>Gardienne</title>
      </Head>
      <div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
        <Image alt='Plant Logo Image' src='/potted-plant-icon.png'
          width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
        <h2>Welcome to Gardienne!</h2>
        <p>Plantcare Made Easy</p>
        <Link href='/api/auth/signin' passHref={true}>
          <Button name='Login'></Button></Link>
      </div>
    </>
  );
}

export default HomePage;