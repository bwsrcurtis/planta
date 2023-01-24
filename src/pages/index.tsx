import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

function HomePage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  function fadeIn() {
    setHasLoaded(true);
  };
  return (

    <>
      <Head>
        <title>Planta App</title>
      </Head>
      <div className={`loading-div ${hasLoaded ? 'img-loaded' : 'img-loading'}`}>
        <Image alt='Plant Logo Image' src='/potted-plant-icon.png' width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
        <h2>Welcome to Planta!</h2>
        <p>Plantcare Made Easy</p>
        <Link href='/plants' passHref={true}>
          <Button name='Enter Your Garden'></Button></Link>
        <Link href='/guest' passHref={true}>
          <Button name='Continue as Guest'></Button></Link>
      </div>
    </>
  );
}

export default HomePage;