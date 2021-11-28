import './app.css';
const { default: Sidebar } = require('./components/sidebar/Sidebar');
const { default: Topbar } = require('./components/topbar/Topbar');

function App() {
	return (
		<div className="app">
			<Topbar />
			<div className="container">
				<Sidebar />
				<div className="other">Other</div>
			</div>
		</div>
	);
}

export default App;
