import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import UserLists from './pages/userLists/UserLists';
function App() {
	return (
		<div>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<UserLists />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
