import EditPlant from '@/components/EditPlant';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Edit({ plantId, name, type, health, waterFreq }:
	{ plantId: any, name: any, type: any, health: any, waterFreq: any }) {

	const [hasLoaded, setHasLoaded] = useState(false);
	function fadeIn() {
		setHasLoaded(true);
	};

	return (
		<>
			<Head>
				<title>Update Plant</title>
			</Head>
			<div className={`loading-div ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
				<Link href='/plants'>
					<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
						width={125} height={125} onLoadingComplete={() => fadeIn()}></Image>
				</Link>
				<h2>Update Plant</h2>
				<EditPlant plantId={plantId} name={name} type={type}
					health={health} waterFreq={waterFreq} />
			</div>
		</>
	);
}
