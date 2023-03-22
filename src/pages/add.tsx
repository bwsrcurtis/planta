import CreatePlant from '@/components/CreatePlant';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

export default function Add() {

	const [hasLoaded, setHasLoaded] = useState(false);
	function fadeIn() {
		setHasLoaded(true);
	};

	const display: string = 'show';

	return (
		<>
			<Head>
				<title>Add Plant</title>
			</Head>
			<div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
				<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
					width={150} height={150} onLoadingComplete={() => fadeIn()}></Image>
				<h2>Add Your Plant</h2>
				<CreatePlant display={display} />
			</div>
		</>
	);
}
