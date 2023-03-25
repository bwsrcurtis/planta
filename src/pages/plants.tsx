import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import prisma from '../../prisma/prisma';
import Garden from '@/components/Garden';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';


const Plants = ({ plants }: { plants: any }) => {

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
				<div className={`garden-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
					<Garden plants={plants}></Garden>
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

export const getServerSideProps = async ({ req }: { req: any }) => {
	const session = await getSession({ req });
	const id = session?.user?.id;
	const plants = await prisma.plant.findMany({
		where: {
			userId: id,
		},
		select: {
			id: true,
			name: true,
			type: true,
			health: true,
			waterFreq: true,
		}
	},);
	return {
		props: {
			plants
		},
	};
};