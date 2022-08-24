import { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
// import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import "./App.scss";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<main className="container my-4 mx-auto px-4">
				{/* <SignIn /> */}
				<SignUp />
			</main>
		</Fragment>
	);
};

export default App;
