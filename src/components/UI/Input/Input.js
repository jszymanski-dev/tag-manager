import { useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Input.module.scss";

const Input = ({ type = "text", value: defaultValue, ...restProps }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isLabelOnTop, setIsLabelOnTop] = useState(!!defaultValue);
	const passwordVisiblityIcon = isPasswordVisible ? faEye : faEyeSlash;

	let labelClassName = styles.input__label;
	labelClassName += isLabelOnTop
		? ` ${styles["input__label--top"]}`
		: ` ${restProps.icon ? styles["input__label--icon"] : ""} ${type === "password" ? styles["input__label--pass"] : ""}`;

	let inputClassName = `${styles.input__field} ${restProps.icon ? styles["input__field--icon"] : ""} ${
		type === "password" ? styles["input__field--pass"] : ""
	}`;

	const passwordIconHandler = () => {
		setIsPasswordVisible((prevSnap) => !prevSnap);
	};
	const inputFocusHandler = () => {
		setIsLabelOnTop(true);
	};
	const inputBlurHandler = (event) => {
		setIsLabelOnTop(!!event.target.value);
	};

	return (
		<div className={styles.input}>
			{restProps.icon && <FontAwesomeIcon icon={restProps.icon} className={styles.input__icon} />}
			{type === "password" && (
				<FontAwesomeIcon
					icon={passwordVisiblityIcon}
					className={`${styles.input__icon} ${styles["input__icon--pass"]}`}
					onClick={passwordIconHandler}
				/>
			)}
			<label htmlFor={restProps.id ? restProps.id : ""} className={labelClassName}>
				{restProps.label}
			</label>
			<input
				type={type === "password" ? (isPasswordVisible ? "text" : type) : type}
				className={inputClassName}
				defaultValue={defaultValue}
				{...restProps}
				onFocus={inputFocusHandler}
				onBlur={inputBlurHandler}
			/>
		</div>
	);
};

export default Input;
