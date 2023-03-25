import styles from './Button.module.css';


const Button = ({ name, type, ...props }: { name: string, type?: any, onClick?: React.MouseEventHandler<HTMLElement> }) => {
	if (type) {
		return (
			<>
				<button className={styles.button} {...props} type={type}>{name}</button>
			</>
		);
	}
	return (
		<>
			<button className={styles.button} {...props}>{name}</button>
		</>
	);
};

export default Button;