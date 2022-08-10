import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
	return (
		<Button>
			<FontAwesomeIcon icon={faUser} /> Zaloguj
		</Button>
	);
};

export default Profile;
