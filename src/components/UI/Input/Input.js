import { useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ type = "text", value: defaultValue, ...restProps }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isLabelOnTop, setIsLabelOnTop] = useState(!!defaultValue);
	const passwordVisiblityIcon = isPasswordVisible ? faEyeSlash : faEye;

	let labelClassName = "absolute -translate-y-1/2 text-gray-700 transition-all ease-linear";
	labelClassName += isLabelOnTop ? " top-0 left-2 z-20 px-2 text-sm bg-white" : ` top-1/2 ${restProps.icon ? "left-[4.25rem]" : "left-4"} -z-10 text-lg`;

	let inputClassName = `w-full p-4 ${restProps.icon && "pl-[4.25rem]"} text-lg border border-solid border-gray-200 rounded-md bg-transparent`;
	inputClassName += type === "password" ? " pr-11" : "";

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
		<div className="relative z-10 w-full my-8 rounded-md bg-white">
			{restProps.icon && (
				<FontAwesomeIcon icon={restProps.icon} className="absolute top-1/2 left-4 -z-10 -translate-y-1/2 w-9 text-3xl text-gray-300" />
			)}
			{type === "password" && (
				<FontAwesomeIcon
					icon={passwordVisiblityIcon}
					className="absolute top-1/2 right-2 -translate-y-1/2 w-7 text-xl text-gray-300 cursor-pointer"
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
