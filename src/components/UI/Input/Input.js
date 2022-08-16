import { useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ type = "text", value: defaultValue, ...restProps }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isLabelOnTop, setIsLabelOnTop] = useState(!!defaultValue);
	const passwordVisiblityIcon = isPasswordVisible ? faEyeSlash : faEye;

	let labelClassName = "absolute -translate-y-1/2 text-gray-700 transition-all ease-linear";
	labelClassName += isLabelOnTop
		? " top-0 left-2 z-20 px-2 text-xs sm:text-sm bg-white"
		: ` top-1/2 ${restProps.icon ? "left-10 sm:left-[4.25rem]" : "left-4"} -z-10 text-base sm:text-lg`;
	labelClassName += type === "password" ? " pr-9 sm:pr-11" : "";

	let inputClassName = `w-full p-2 sm:p-4 ${
		restProps.icon && "pl-10 sm:pl-[4.25rem]"
	} text-base sm:text-lg border border-solid border-gray-200 rounded-md bg-transparent`;
	inputClassName += type === "password" ? " pr-9 sm:pr-11" : "";

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
		<div className="relative z-10 w-full my-4 sm:my-8 rounded-md bg-white">
			{restProps.icon && (
				<FontAwesomeIcon
					icon={restProps.icon}
					className="absolute top-1/2 left-2 sm:left-4 -z-10 -translate-y-1/2 w-6 sm:w-9 text-xl sm:text-3xl text-gray-300"
				/>
			)}
			{type === "password" && (
				<FontAwesomeIcon
					icon={passwordVisiblityIcon}
					className="absolute top-1/2 right-2 -translate-y-1/2 w-5 sm:w-7 text-base sm:text-xl text-gray-400 cursor-pointer"
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
