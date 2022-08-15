const Button = ({ children, type = "button", variant = "primary", className: passedClassName, ...restProps }) => {
	let className = "flex gap-2 items-center justify-center px-4 py-1 text-lg border border-solid rounded-md transition";

	if (variant === "primary") {
		className += " text-white bg-slate-800 border-slate-900 hover:bg-slate-900";
	}

	if (passedClassName) {
		className += ` ${passedClassName}`;
	}

	return (
		<button type={type} className={className} {...restProps}>
			{children}
		</button>
	);
};

export default Button;
