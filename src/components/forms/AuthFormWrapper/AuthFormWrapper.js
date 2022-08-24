import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card";

import styles from './AuthFormWrapper.module.scss';

const AuthFormWrapper = ({ children }) => {
	return (
		<Card className={styles.wrapper}>
			{/* <div className="absolute -top-16 left-2/4 -translate-x-16 w-32 h-32 bg-white border border-solid border-gray-200 rounded-full shadow-xl overflow-hidden"> */}
			<div className={styles.wrapper__avatar}>
				<Avatar />
			</div>
			{children}
		</Card>
	);
};

export default AuthFormWrapper;
