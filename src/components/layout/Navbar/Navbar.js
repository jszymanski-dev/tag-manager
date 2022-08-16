import Logo from "../Logo";
import AccountNavbar from "../AccountNavbar";

const Header = () => {
	return (
		<header className="flex justify-between w-screen p-4 bg-slate-700">
			<Logo />
			<AccountNavbar />
		</header>
	);
};

export default Header;
