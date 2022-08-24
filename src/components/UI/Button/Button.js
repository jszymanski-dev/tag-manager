import styles from "./Button.module.scss";

const Button = ({ children, type = "button", variant = "primary", className: passedClassName, ...restProps }) => {
	let className = `${styles.button} ${styles[`button--${variant}`]}`;
	className += !!passedClassName ? ` ${passedClassName}` : "";

	return (
		<button type={type} className={className} {...restProps}>
			{children}
		</button>
	);
};

export default Button;
