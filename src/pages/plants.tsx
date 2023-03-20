import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Plants = () => {

	// const [inputValue, setInputValue] = useState("");
	const router = useRouter();

	let auth = true;

	useEffect(() => {
		const checkAuth = async () => {
			if (auth) {
				return (
					<>
						<Head>
							<title>My Plants</title>
						</Head>
						<h1>plants</h1>
					</>
				);
			}
			else { return router.push('/login'); }
		};
		checkAuth();
	}, [auth, router]);;
};

export default Plants;