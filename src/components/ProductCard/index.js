import React, { Component } from 'react';
import classNames from 'classnames';

import './styles.css';

class ProductCard extends Component {

	currency = '$';

	_renderFavorite = (saleOf, isSale) => {
		if (!!saleOf || isSale) {
			return <div className="favorite favorite_left"></div>;
		}

		return <div className="favorite"></div>;
	}

	_renderTag = (isNew, isSale, saleOf) => {
		if (isNew) {
			return <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
		}

		if (isSale) {
			return <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
		}

		if (!!saleOf) {
			return <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-{this.addCurrency(saleOf)}</span></div>;
		}

		return null;
	}

	addCurrency = (value) => `${this.currency}${value.toFixed(2)}`;

	checkTypeProduct = (numberType) => {
		switch (numberType) {
			case 1:
				return "men";
			case 2:
				return "women";
			case 3:
				return "accessories";
			case 4:
				return "*";
			default:
				return "*";
		}
	}

	onClickHandler = () => {
		if(this.props.onClickProduct) {
			this.props.onClickProduct(this.props.product.id);
		}
	}

	onClickAddToCartHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const {product} = this.props;
		if(this.props.onClickAddToCart) {
			this.props.onClickAddToCart(product);
		}
	}

	render() {
		const { id, name, thumbnail, isNew, isSale, linkRedirect, originalPrice, saleOf, salePrice, type } = this.props.product;

		let typeName = this.checkTypeProduct(type);


		return (
			<div onClick={this.onClickHandler} key={`product-${id}`} className={`product-item ${typeName}`}>
				<div className="product discount product_filter">
					<div className="product_image">
						<img src={thumbnail} alt="" />
					</div>
					{
						this._renderFavorite(saleOf, isSale)
					}
					{
						this._renderTag(isNew, isSale, saleOf)
					}
					<div className="product_info">
						<h6 className="product_name"><a href={linkRedirect}>{name}</a></h6>
						<div className="product_price">
							{!!saleOf ? this.addCurrency(salePrice) : this.addCurrency(originalPrice)}
							{!!saleOf && <span>{this.addCurrency(originalPrice)}</span>}
						</div>
					</div>
				</div>
				<div className="red_button add_to_cart_button" ><a href="#" onClick={this.onClickAddToCartHandler}>add to cart</a></div>
			</div>
		);
	}
}

export default ProductCard;
