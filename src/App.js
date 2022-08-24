import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="sing-in" element={<SignIn />} />
					<Route path="sing-up" element={<SignUp />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
