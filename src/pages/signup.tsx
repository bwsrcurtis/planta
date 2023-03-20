import Head from 'next/head';
import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

function Signup() {
	const [hasLoaded, setHasLoaded] = useState(false);

	function fadeIn() {
		setHasLoaded(true);
	};

	return (
		<>
			<Head>
				<title>Signup</title>
			</Head>
			<div className="signup-flex">
				<div className={`signup-form ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
					<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
						width={100} height={100} onLoadingComplete={() => fadeIn()}></Image>
					<h1>Planta</h1>
					<div className="details">
						<h3>First Name:</h3>
						<input type="text" placeholder="First Name"></input>
						<h3>Last Name:</h3>
						<input type="text" placeholder="Last Name"></input>
					</div>
					<div className="details">
						<h3>Email:</h3>
						<input type="text" placeholder="Email"></input>
						<h3>Password:</h3>
						<input className="password-input" type="text" placeholder="Password"></input>
					</div>
					<div>
						<Link href="/signup" passHref={true}>
							<Button name='Signup'></Button></Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;