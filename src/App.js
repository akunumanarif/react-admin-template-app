import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div className="app">
			<Topbar />
			<div className="container">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}

export default App;
