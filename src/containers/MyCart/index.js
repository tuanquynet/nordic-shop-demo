import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuantitySelection from '../../components/QuantitySelection';

import {addToCart, removeFromCart} from '../../actions/my-cart';

import './style.css';

class MyCart extends Component {
	// mockMyCart =

	state = {
		myCart: [
			{
				id: '1',
				name: 'Product 1',
				image: 'images/product_1.png',
				quantity: 3,
				salePrice: 100,
			},
			{
				id: '2',
				name: 'Product 2',
				image: 'images/product_2.png',
				quantity: 1,
				salePrice: 120,
			},
			{
				id: '3',
				name: 'Product 3',
				image: 'images/product_3.png',
				quantity: 3,
				salePrice: 220,
			}
		],
	}

	onMinusQuantity = (id) => {
		const {products = []} = this.props.myCart || {};

		const selectedProduct = products.filter(item => item.id === id)[0];
		if (selectedProduct.quantity === 1) {
			return;
		}
		this.props.removeFromCart(selectedProduct, 1);
	}

	onPlusQuantity = (id) => {
		const {products = []} = this.props.myCart || {};

		const selectedProduct = products.filter(item => item.id === id)[0];

		this.props.addToCart(selectedProduct);
	}

	onClickRemoveHandler = (e) => {
		const id = e.target.getAttribute('data-id');
		const {products = []} = this.props.myCart || {};

		const selectedProduct = products.filter(item => item.id === id)[0];

		// -1 for removing all
		this.props.removeFromCart(selectedProduct, -1);
	}

	renderMyCart = () => {
		const {myCart = {}} = this.props;
		const {products = []} = myCart;

		return products.length > 0
			? (
				<table class="table">
					{products.map((item) => {
						return (
							<tr key={item.id}>
								<td><img className="product-image" src={item.image} /></td>
								<td>{item.name}</td>
								<td className="price-column">{(item.salePrice || item.originalPrice) * item.quantity}$</td>
								<td>
									<QuantitySelection data-id={item.id} value={item.quantity} onMinus={this.onMinusQuantity.bind(this, item.id)} onPlus={this.onPlusQuantity.bind(this, item.id)}></QuantitySelection>
								</td>
								<td>
								<div className="red_button remove_button"><a data-id={item.id} href="#" onClick={this.onClickRemoveHandler}>Remove</a></div>
								</td>
							</tr>
						)
					})}
				</table>
			)
			: <div>No product added to cart.</div>
	}

	render() {
		const {products = [], totalItems: totalItemsInCart} = this.props.myCart || {};
		const total = products.reduce((initial, item) => (initial += (item.salePrice || item.originalPrice) * item.quantity), 0);

		return (
			<div className="super_container mycart-page">
				<Header totalItemsInCart={totalItemsInCart} onClickCheckout={this.onClickCheckoutHandler} />
				<div className="container single_product_container">
					<h3 className="page-header">My Cart</h3>
					<div class="row">
						<div class="col-md-9">
							{this.renderMyCart()}
						</div>
						{
							totalItemsInCart > 0
								? (<div class="col-md-3 mycart-cost-summary">
										<div class="mycart-cost-summary-container">
											<div className="total-block clear-fix"><span>Total: </span><div className="total">{total}$</div></div>
											<div className="red_button"><a href="#">Proceed</a></div>
										</div>
									</div>)
								: null
						}

					</div>
				</div>
				<Footer />
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	const {myCart} = state;
	return {
		myCart,
	};
};

// at the moment we share the same actions with NewArrivalBlock for fetching category, product
const mapDispatchToProps = {
	addToCart,
	removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
