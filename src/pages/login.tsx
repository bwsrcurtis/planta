import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const login = () => {
	return (
		<div className="login-flex">
			<div className="login-form">
				<Image alt='Plant Logo Image' src='/potted-plant-icon.png' width={100} height={100}></Image>
				<h1>Planta</h1>
				<h2>Email:</h2>
				<input type="text" placeholder="Email"></input>
				<h2>Password:</h2>
				<input className="password-input" type="text" placeholder="Password"></input>
				<div>
					<Button name='Login'></Button>
					<Link href="/signup" passHref={true}>
						<Button name='Signup'></Button></Link>
				</div>
			</div>
		</div>
	);
};

export default login;