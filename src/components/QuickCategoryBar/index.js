import React, { Component } from 'react';

import './style.css'

class QuickCategoryBar extends Component {
	bannerStyles = [
		{
			backgroundImage: 'url(images/banner_1.jpg)',
		},
		{
			backgroundImage: 'url(images/banner_2.jpg)',
		},
		{
			backgroundImage: 'url(images/banner_3.jpg)',
		},
	];

	render() {
		return (
			<div className="banner">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="banner_item align-items-center" style={this.bannerStyles[0]}>
								<div className="banner_category">
									<a href="categories.html">women's</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="banner_item align-items-center" style={this.bannerStyles[1]}>
								<div className="banner_category">
									<a href="categories.html">accessories's</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="banner_item align-items-center" style={this.bannerStyles[2]}>
								<div className="banner_category">
									<a href="categories.html">men's</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QuickCategoryBar;
