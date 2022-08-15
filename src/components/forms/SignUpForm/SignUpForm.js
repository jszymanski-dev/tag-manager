import { Fragment } from "react";

import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
	return (
		<Card className="relative max-w-xl mx-auto mt-28 pt-20 pb-12 shadow-md">
			<div className="absolute -top-16 left-2/4 -translate-x-16 w-32 h-32 bg-white border border-solid border-gray-200 rounded-full shadow-xl overflow-hidden">
				<Avatar />
			</div>
			<p className="mb-4 text-center text-2xl font-thin uppercase">Create an account</p>
			<form>
				<Input id="user" type="text" icon={faUser} label="Username" />
				<Input id="email" type="email" icon={faEnvelope} label="E-mail" />
				<Input id="pass" type="password" icon={faLock} label="Password" />
				<Input id="conf-pass" type="password" icon={faLock} label="Confirm password" />
				<Checkbox
					id="confirm"
					label={
						<Fragment>
							I accept <span className="cursor-pointer text-blue-700">Terms</span> and{" "}
							<span className="cursor-pointer text-blue-700">Privacy Policy</span>
						</Fragment>
					}
				/>
				<Button type="submit" className="mx-auto max-w-xs w-full whitespace-nowrap">
					Create an account
				</Button>
			</form>
			<p className="mt-2 text-center text-sm">
				Already have an account? <span className="cursor-pointer text-blue-700">Sign In</span>
			</p>
			{/* <p className="mt-4 text-center text-xl font-light">
				<span className="cursor-pointer text-blue-700">
					Forgot your password?
				</span>
			</p> */}
		</Card>
	);
};

export default SignUpForm;
