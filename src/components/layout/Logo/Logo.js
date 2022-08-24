import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<h1 className={styles.logo}>
			<Link to="/" className={styles.logo__wrapper}>
				<FontAwesomeIcon icon={faCode} className={styles.logo__icon} />
				<span>Tag/Manager</span>
			</Link>
		</h1>
	);
};

export default Logo;
