const Card = ({ children, className }) => {
	return (
		<div
			className={`my-4 p-4 border border-solid border-gray-200 rounded-md ${
				className || ""
			}`}
		>
			{children}
		</div>
	);
};

export default Card;
