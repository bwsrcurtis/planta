import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


function Login() {
	const [hasLoaded, setHasLoaded] = useState(false);

	function fadeIn() {
		setHasLoaded(true);
	};
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className="login-flex">
				<div className={`login-form ${hasLoaded ? 'is-loaded' : 'is-loading'}`}>
					<Image alt='Plant Logo Image' src='/potted-plant-icon.png'
						width={100} height={100} onLoadingComplete={() => fadeIn()}></Image>
					<h1>Planta</h1>
					<h2>Email:</h2>
					<input type="text" placeholder="Email"></input>
					<h2>Password:</h2>
					<input className="password-input" type="text" placeholder="Password"></input>
					<div>
						<Link href="/plants" passHref={true}>
							<Button name='Login'></Button></Link>
						<Link href="/signup" passHref={true}>
							<Button name='Signup'></Button></Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;