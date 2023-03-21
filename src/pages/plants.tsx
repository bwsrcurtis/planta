import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
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
					<h1>{`${session?.user?.email}`}</h1>
					<h1>{`${session?.user?.name}`}</h1>
					<Image alt='Plant Logo Image' src={`${session?.user?.image}`}
						width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
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
				<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
					width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
				<h2>Welcome to Gardienne!</h2>
				<p>Plantcare Made Easy</p>
				<Link href='/api/auth/signin' passHref={true}>
					<Button name='Login'></Button></Link>
			</div></>
	);
};

export default Plants;