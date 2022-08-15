import { useState } from "react";

const Checkbox = ({ ...restProps }) => {
	const [isChecked, setIsChecked] = useState(false);
	let squareClassName =
		"flex-none relative w-6 h-6 border border-solid transition" +
		" after:absolute after:top-[40%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block" +
		" after:w-4 after:h-2 after:border-b-2 after:border-l-2 after:-rotate-45";
	squareClassName += isChecked
		? " bg-slate-700 border-slate-700 after:border-white"
		: " border-gray-200 group-hover:border-gray-400 after:border-transparent";

	const toggleCheckboxHandler = (event) => {
		event.preventDefault();
		setIsChecked((prevSnap) => !prevSnap);
	};

	return (
		<div className="group relative z-0 flex gap-2 items-start w-fit my-8 rounded-md text-base" onClick={toggleCheckboxHandler}>
			<input
				type="checkbox"
				className="absolute -z-10 w-0 h-0 overflow-hidden border-none border-0 opacity-0"
				checked={isChecked}
				readOnly
				{...restProps}
			/>
			<div className={squareClassName}></div>
			<label htmlFor={restProps.id ? restProps.id : ""}>{restProps.label}</label>
		</div>
	);
};

export default Checkbox;
