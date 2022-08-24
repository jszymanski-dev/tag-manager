import Logo from "../Logo";
import AccountNavbar from "../AccountNavbar";

import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<AccountNavbar />
		</nav>
	);
};

export default Navbar;
