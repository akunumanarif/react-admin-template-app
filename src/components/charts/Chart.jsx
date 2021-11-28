import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
	const data = [
		{
			name: 'Jan',
			'Active User': 4000
		},
		{
			name: 'Feb',
			'Active User': 2000
		},
		{
			name: 'Mar',
			'Active User': 1000
		},
		{
			name: 'Apr',
			'Active User': 1000
		},
		{
			name: 'Mei',
			'Active User': 2000
		},
		{
			name: 'Jun',
			'Active User': 1000
		},
		{
			name: 'Jul',
			'Active User': 4000
		},
		{
			name: 'Aug',
			'Active User': 3000
		},
		{
			name: 'Sep',
			'Active User': 3000
		},
		{
			name: 'Oct',
			'Active User': 4000
		},
		{
			name: 'Nov',
			'Active User': 6000
		},
		{
			name: 'Des',
			'Active User': 8000
		}
	];
	return (
		<div className="chart">
			<h3 className="chartTitle">User Analitycs</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey="Active User" stroke="#5550bd" />
					<Tooltip />
					<CartesianGrid sstroke="#ccccce" strokeDasharray="5 5" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
