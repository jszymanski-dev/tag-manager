import { Fragment } from "react";

import Header from "./components/layout/Header";
// import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import "./App.css";

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className="container my-4 mx-auto px-4">
				{/* <SignIn /> */}
				<SignUp />
			</main>
		</Fragment>
	);
};

export default App;
