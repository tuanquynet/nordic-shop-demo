import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
class MainNavigation extends React.Component{
    render(){
		const {totalItemsInCart = 0} = this.props;

        return(
            <div className="main_nav_container">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-right">
							<div className="logo_container">
								<a href="#">Nordic<span>Shop</span></a>
							</div>
							<nav className="navbar">
								<ul className="navbar_menu">
									<li><Link to="/">Home</Link></li>
									<li><Link to="/categories">Shop</Link></li>
									<li><Link to="/promotions">Promotions</Link></li>
									<li><Link to="/blogs">Blog</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
								<ul className="navbar_user">
									<li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
									<li className="checkout" onClick={this.props.onClickCheckout}>
										<a href="#">
											<i className="fa fa-shopping-cart" aria-hidden="true"></i>
											{
												totalItemsInCart
												? (<span id="checkout_items" className="checkout_items">{totalItemsInCart}</span>)
												: null
											}
										</a>
									</li>
								</ul>
								<div className="hamburger_container">
									<i className="fa fa-bars" aria-hidden="true"></i>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default MainNavigation;
