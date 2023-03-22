import styles from './Button.module.css';


const Button = ({ name, type }: { name: string, type?: any }) => {
	if (type) {
		return (
			<>
				<button className={styles.button} type={type}>{name}</button>
			</>
		);
	}
	return (
		<>
			<button className={styles.button}>{name}</button>
		</>
	);
};

export default Button;