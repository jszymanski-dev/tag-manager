import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AuthFormWrapper from '../AuthFormWrapper';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Checkbox from '../../UI/Checkbox';

import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './SingUpForm.module.scss';

const SignUpForm = () => {
	return (
		<AuthFormWrapper>
			<p className={styles.form__title}>Create an account</p>
			<form>
				<Input id="user" type="text" icon={faUser} label="Username" />
				<Input id="email" type="email" icon={faEnvelope} label="E-mail" />
				<Input id="pass" type="password" icon={faLock} label="Password" />
				<Input id="conf-pass" type="password" icon={faLock} label="Confirm password" />
				<Checkbox
					id="confirm"
					label={
						<Fragment>
							I accept <span className="link">Terms</span> and{' '}
							<span className="link">Privacy Policy</span>
						</Fragment>
					}
				/>
				<Button type="submit" className={styles.form__button}>
					Create an account
				</Button>
			</form>
			<p className={styles.form__alternate}>
				Already have an account? <Link to="/sing-in">Sign In</Link>
			</p>
		</AuthFormWrapper>
	);
};

export default SignUpForm;
