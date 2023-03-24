import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import PlantDisplay from '@/components/PlantDisplay';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';


const Plants = () => {

	const [hasLoaded, setHasLoaded] = useState(false);
	function fadeIn() {
		setHasLoaded(true);
	};

	const { data: session } = useSession();


	if (session) {
		return (
			<>
				<Head>
					<title>My Garden</title>
				</Head>
				<div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
					<Link href='/plants'>
						<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
							width={125} height={125} onLoadingComplete={() => fadeIn()}></Image>
					</Link>
					<h1>Welcome to Your Garden!</h1>
					<div className='plantdiv'>
						<PlantDisplay></PlantDisplay>
					</div>
					<div className='buttondiv'>
						<Link href='/add' passHref={true}>
							<Button name='➕ 🌿'></Button>
						</Link>
						<div onClick={() => signOut()}>
							<Button name='Sign Out'></Button>
						</div></div>
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>Gardienne</title>
			</Head>
			<div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
				<Link href='/plants'>
					<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
						width={125} height={125} onLoadingComplete={() => fadeIn()}></Image>
				</Link>
				<h2>Welcome to Gardienne!</h2>
				<p>Plantcare Made Easy</p>
				<Link href='/api/auth/signin' passHref={true}>
					<Button name='Login'></Button></Link>
			</div></>
	);
};

export default Plants;