import './userLists.css';
import { DataGrid } from '@mui/x-data-grid';

export default function UserLists() {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'username', headerName: 'UserName', width: 130 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 110
		}
	];

	const rows = [
		{ id: 1, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 2, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 3, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 4, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 5, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 6, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 7, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 8, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 9, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' },
		{ id: 10, username: 'akunuman', email: 'numanganteng@gmail.com', age: 35, transaction: '$200.000' }
	];

	return (
		<div className="userLists">
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} checkboxSelection />
		</div>
	);
}
