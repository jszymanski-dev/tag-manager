import { useState } from "react";

import styles from './Checkbox.module.scss';

const Checkbox = ({ ...restProps }) => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckboxHandler = (event) => {
		event.preventDefault();
		setIsChecked((prevSnap) => !prevSnap);
	};

	return (
		<div className={`${styles.checkbox} ${isChecked && styles['checkbox--checked']}`} onClick={toggleCheckboxHandler}>
			<input
				type="checkbox"
				className={styles.checkbox__input}
				checked={isChecked}
				readOnly
				{...restProps}
			/>
			<div className={styles.checkbox__square}></div>
			<label htmlFor={restProps.id ? restProps.id : ""}>{restProps.label}</label>
		</div>
	);
};

export default Checkbox;
