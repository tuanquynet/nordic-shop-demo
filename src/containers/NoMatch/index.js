import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class NoMatch extends Component {
	render() {
		return (
			<div className="super_container">
				<Header />
				<h3 className="container" style={{paddingTop: '200px'}}>Page Not Found!</h3>
				<Footer />
			</div>
		);
	}
}

export default NoMatch;
