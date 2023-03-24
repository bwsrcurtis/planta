import CreatePlant from '@/components/CreatePlant';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Add() {

	const [hasLoaded, setHasLoaded] = useState(false);
	function fadeIn() {
		setHasLoaded(true);
	};

	const display: string = 'show';

	return (
		<>
			<Head>
				<title>New Plant</title>
			</Head>
			<div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
				<Link href='/plants'>
					<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
						width={125} height={125} onLoadingComplete={() => fadeIn()}></Image>
				</Link>
				<h2>New Plant</h2>
				<CreatePlant display={display} />
			</div>
		</>
	);
}
