const Button = ({ children, type, style, ...props }) => {
	let classes =
		"flex gap-2 items-center px-4 py-1 text-lg border border-solid rounded-md transition";

	if (style === "primary" || !style) {
		classes +=
			" text-white bg-slate-800 border-slate-900 hover:bg-slate-900";
	}

	return (
		<button type={type || "button"} className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
