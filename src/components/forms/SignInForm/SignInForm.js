import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const SignInForm = () => {
	return (
		<Card className="relative max-w-xl mx-auto mt-28 pt-20 pb-12 shadow-md">
			<div className="absolute -top-16 left-2/4 -translate-x-16 w-32 h-32 bg-white border border-solid border-gray-200 rounded-full shadow-xl overflow-hidden">
				<Avatar />
			</div>
			<form>
				<Input id="user" type="text" icon={faUser} label="Username" />
				<Input id="pass" type="password" icon={faLock} label="Password" />
				<Button type="submit" className="mx-auto max-w-xs w-full whitespace-nowrap">
					Sign In
				</Button>
			</form>
			<p className="mt-2 text-center text-sm">
				Or <span className="cursor-pointer text-blue-700">create an account</span>
			</p>
			<p className="mt-4 text-center text-xl font-light">
				<span className="cursor-pointer text-blue-700">Forgot your password?</span>
			</p>
		</Card>
	);
};

export default SignInForm;
