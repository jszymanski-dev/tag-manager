import Avatar from '../../UI/Avatar';
import Card from '../../UI/Card';

import styles from './AuthFormWrapper.module.scss';

const AuthFormWrapper = ({ children }) => {
	return (
		<Card className={styles.wrapper}>
			<div className={styles.wrapper__avatar}>
				<Avatar />
			</div>
			{children}
		</Card>
	);
};

export default AuthFormWrapper;
