import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLists from './pages/userLists/UserLists';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
function App() {
	return (
		<div>
			<Topbar />
			<div className="container">
				<Sidebar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/users" element={<UserLists />} />
					<Route path="/user/:userId" element={<User />} />
					<Route path="/newUser" element={<NewUser />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/product/:productId" element={<Product />} />
					<Route path="/newProduct" element={<NewUser />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
