import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = ({ image }) => {
	return (
		<div
			className={`flex items-end justify-center w-full h-full bg-cover bg-center ${
				!image && "bg-gray-50"
			}`}
			style={image && { backgroundImage: `url('${image}')` }}
		>
			{!image && (
				<FontAwesomeIcon
					icon={faUser}
					className="w-4/5 h-4/5 text-gray-200"
				/>
			)}
		</div>
	);
};

export default Avatar;
