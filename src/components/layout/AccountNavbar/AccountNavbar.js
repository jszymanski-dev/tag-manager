import { useState } from "react";

import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";

import styles from "./AccountNavbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
	const [isOpened, setIsOpened] = useState(false);

	const isLogged = false;

	const toggleProfileDetails = () => {
		setIsOpened((prevSnippet) => !prevSnippet);
	};

	return (
		<div className={styles.account}>
			<div className={`${styles.account__wrapper} ${isOpened ? styles["account__wrapper--opened"] : ""}`}>
				{!isOpened && (
					<Button className={styles.account__button} variant="transparent" onClick={toggleProfileDetails}>
						<Avatar />
					</Button>
				)}
				{isOpened && (
					<div className={styles.account__details}>
						<Button variant="transparent" className={styles.account__close} onClick={toggleProfileDetails}>
							<FontAwesomeIcon icon={faXmark} />
						</Button>
						<div className={styles.account__avatar}>
							<Avatar />
						</div>
						{!isLogged && (
							<>
								<Button variant="gray">Sing In</Button>
								<Button variant="gray">Sing Up</Button>
							</>
						)}
						{isLogged && <p>LOGGED</p>}
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
