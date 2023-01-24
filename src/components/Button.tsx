import styles from './Button.module.css';

const Button = ({ name }: { name: string }) => {
	return (
		<>
			<button className={styles.button}>{name}</button>
		</>
	);
};

export default Button;