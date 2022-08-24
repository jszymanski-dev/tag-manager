import { Link } from 'react-router-dom';

import AuthFormWrapper from '../AuthFormWrapper';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './SingInForm.module.scss';

const SignInForm = () => {
	return (
		<AuthFormWrapper>
			<form>
				<Input id="user" type="text" icon={faUser} label="Username" />
				<Input id="pass" type="password" icon={faLock} label="Password" />
				<Button type="submit" className={styles.form__button}>
					Sign In
				</Button>
			</form>
			<p className={styles.form__alternate}>
				Or <Link to="/sing-up">create an account</Link>
			</p>
			<p className={styles.form__forgot}>
				<span className="link">Forgot your password?</span>
			</p>
		</AuthFormWrapper>
	);
};

export default SignInForm;
