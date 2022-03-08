import { Link } from 'react-router-dom';
import './product.css';

export default function Product() {
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Edit Product</h1>
				<Link to="/newUser">
					<button className="pruductAddButton">Add Product</button>
				</Link>
			</div>
			<div className="productTop">Top</div>
			<div className="productBottom">Bottom</div>
		</div>
	);
}
