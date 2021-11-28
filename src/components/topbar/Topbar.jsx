import './topbar.css';
import { LanguageOutlined, NotificationsNone, Settings } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">My Admin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<LanguageOutlined />
						{/* <span className="topbarIconBadge">2</span> */}
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img
						src="https://lh3.googleusercontent.com/ogw/ADea4I5WEa9ZGn4x898aMqR8C53tGonv0ZR-oz5NHT5xZA=s83-c-mo"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
}
