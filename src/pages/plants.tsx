import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Plants = () => {

	// const [inputValue, setInputValue] = useState("");
	const router = useRouter();

	let auth = false;
	if (auth) {
		return (
			<>
				<Head>
					<title>My Plants</title>
				</Head>
				<div>plants</div>
			</>
		);
	}
	else {
		useEffect(() => { router.push('/login'); }, []);;
	}
};

export default Plants;