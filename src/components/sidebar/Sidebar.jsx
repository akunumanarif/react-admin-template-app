import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report
} from '@material-ui/icons';
import './sidebar.css';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarItemList">
						<li className="sidebarItem active">
							<LineStyle className="icon" />
							Home
						</li>
						<li className="sidebarItem">
							<Timeline className="icon" />
							Analytics
						</li>
						<li className="sidebarItem">
							<TrendingUp className="icon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarItemList">
						<li className="sidebarItem ">
							<PermIdentity className="icon" />
							Users
						</li>
						<li className="sidebarItem">
							<Storefront className="icon" />
							Products
						</li>
						<li className="sidebarItem">
							<AttachMoney className="icon" />
							Transactions
						</li>
						<li className="sidebarItem">
							<BarChart className="icon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notification</h3>
					<ul className="sidebarItemList">
						<li className="sidebarItem ">
							<MailOutline className="icon" />
							Mail
						</li>
						<li className="sidebarItem">
							<DynamicFeed className="icon" />
							Feedbacks
						</li>
						<li className="sidebarItem">
							<ChatBubbleOutline className="icon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarItemList">
						<li className="sidebarItem ">
							<WorkOutline className="icon" />
							Manage
						</li>
						<li className="sidebarItem">
							<Timeline className="icon" />
							Analytics
						</li>
						<li className="sidebarItem">
							<Report className="icon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
