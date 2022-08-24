import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Avatar.module.scss';

const Avatar = ({ image }) => {
	return (
		<div
			className={`${styles.avatar} ${!image && styles['avatar--empty']}`}
			style={image && { backgroundImage: `url('${image}')` }}
		>
			{!image && <FontAwesomeIcon icon={faUser} className={styles.avatar__icon} />}
		</div>
	);
};

export default Avatar;
