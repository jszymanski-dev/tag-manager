import Logo from "../Logo";
import Profile from "../Profile";

const Header = () => {
	return (
		<header className="flex justify-between w-screen p-4 bg-slate-700">
			<Logo />
			<Profile />
		</header>
	);
};

export default Header;
