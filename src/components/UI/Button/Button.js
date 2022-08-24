import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({ children, type = 'button', variant = 'primary', to, className: passedClassName, ...restProps }) => {
	let className = `${styles.button} ${styles[`button--${variant}`]}`;
	className += !!passedClassName ? ` ${passedClassName}` : '';

	const content =
		type === 'link' ? (
			!restProps.external ? (
				<Link to={to} className={className} {...restProps}>
					{children}
				</Link>
			) : (
				<Link href={to} className={className} {...restProps} reloadDocument>
					{children}
				</Link>
			)
		) : (
			<button type={type} className={className} {...restProps}>
				{children}
			</button>
		);

	return content;
};

export default Button;
