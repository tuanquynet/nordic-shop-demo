import React, { Component } from 'react';
import TopNav from '../TopNav';
import MainNavigation from '../MainNavigation';

import './style.css';

class Header extends Component {
	render() {
		return (
			<header className="header trans_300">
				<TopNav />
				<MainNavigation />
			</header>
		);
	}
}

export default Header;
