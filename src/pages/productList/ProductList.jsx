import React from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
	const [ data, setData ] = useState(productRows);

	const editProduct = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 110 },
		{
			field: 'product',
			headerName: 'Product',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListContainer">
						<img className="productImg" src={params.row.img} alt="" />
						{params.row.name}
					</div>
				);
			}
		},
		{ field: 'stock', headerName: 'Stock', width: 200 },
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 110
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<React.Fragment>
						<Link to={'/product/' + params.row.id}>
							<button className="poductEdit">Edit</button>
						</Link>
						<DeleteForever
							className="productDelete"
							onClick={() => {
								editProduct(params.row.id);
							}}
						/>
					</React.Fragment>
				);
			}
		}
	];

	return (
		<div className="productList">
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[ 5 ]}
				checkboxSelection
			/>
		</div>
	);
}
