import './app.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
// const { default: Sidebar } = require('./components/sidebar/Sidebar');
// const { default: Topbar } = require('./components/topbar/Topbar');

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
