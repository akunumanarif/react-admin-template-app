import './userLists.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from '@material-ui/icons';

export default function UserLists() {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{
			field: 'username',
			headerName: 'User',
			width: 130,
			renderCell: (params) => {
				return (
					<div className="userListContainer">
						<img className="userImg" src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			}
		},
		{ field: 'email', headerName: 'Email', width: 200 },
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
					<div className="actionContainer">
						<DeleteForever className="userDelete" />
						<button className="userEdit">Edit</button>
					</div>
				);
			}
		}
	];

	const rows = [
		{
			id: 1,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 2,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 3,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 4,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 5,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 6,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 7,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 8,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 9,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		},
		{
			id: 10,
			username: 'akunuman',
			avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo',
			email: 'numanganteng@gmail.com',
			age: 35,
			transaction: '$200.000'
		}
	];

	return (
		<div className="userLists">
			<DataGrid
				rows={rows}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				//rowsPerPageOptions={[ 5 ]}
				checkboxSelection
			/>
		</div>
	);
}
