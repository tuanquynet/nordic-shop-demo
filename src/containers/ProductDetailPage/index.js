import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import QuantitySelection from '../../components/QuantitySelection';
import AddToCart from "../../components/AddToCart";
import config from "../../config";
import {PageNames} from '../../constants';

import "./style.css";

import { getOneCategory } from '../../actions/category';
import { getProductDetail } from '../../actions/product';
import { addToCart } from '../../actions/my-cart';

class ProductDetailPage extends Component {
	state = {
		productDetail: {},
		quantity: 1,
		category: {},
		selectedThumb: 0,
	}

	componentDidMount() {
		this.fetchProduct(this.props.match.params.productId);
	}

	componentWillReceiveProps(nextProps) {
		const currentProductDetail = this.props.productDetail || {};
		const nextProductDetail = nextProps.productDetail || {};
		const changed = !currentProductDetail
			|| currentProductDetail.categoryId !== nextProductDetail.categoryId;
		if (changed) {
			this.fetchCategoryDetail(nextProps.productDetail.categoryId);
		}
	}

	fetchProduct(productId) {
		// productId = '5bb2e59c133ed3128d12eef5';
		this.props.getProductDetail(`${config.apiUrl}/products/${productId}`);
	}

	fetchCategoryDetail(categoryId) {
		this.props.getOneCategory(`${config.apiUrl}/categories/${categoryId}`);
	}

	onClickThumb = (e) => {
		console.log(e.target.getAttribute('data-key'));
		this.setState({
			selectedThumb: e.target.getAttribute('data-key'),
		});
	}

	renderThumbnails = (thumbnails, selectedThumb = '') => {
		if (thumbnails && thumbnails.length) {
			return (
				<ul>
					{thumbnails.map((thumbnail, key) =>
						<li key={key} onClick={this.onClickThumb} data-key={key}>
							<img src={`${thumbnail}`}
								className={selectedThumb.toString() === key.toString() ? 'active' : ''}
								alt="" data-image={thumbnail} />
						</li>
					)}
				</ul>
			)
		} else {
			return '';
		}
	}

	onMinusQuantity = () => {
		let {quantity} = this.state;
		this.setState({
			quantity: Math.max(1, quantity - 1),
		})
	}

	onPlusQuantity = () => {
		const {quantity} = this.state;
		this.setState({
			quantity: Math.min(10, quantity + 1),
		})
	}

	onClickAddToCartHandler = (e) => {
		e.preventDefault();
		const {productDetail} = this.props;
		const {quantity} = this.state;
		this.props.addToCart(productDetail, quantity);
	}

	onClickCheckoutHandler = (e) => {
		this.props.history.push(PageNames.MY_CART);
	}

    render() {
		const {selectedThumb} = this.state;
		const {productDetail = {}, category = {}} = this.props;
		const thumbnails = productDetail ? productDetail.thumbnails : [];
		const {images = []} = productDetail;
		const selectedImageUrl = images
			? `url(${images[selectedThumb]})`
			: 'url("")';
		const {quantity}  = this.state;
		const breadcrumbValues = [].concat({
			label: 'Home',
			link: '/',
		}).concat({
			label: category.name,
			link: `/categories/${category.id}`
		}).concat({
			label: productDetail.name || '',
			link: ''
		});

    	return (
			<div className="super_container">
				<Header totalItemsInCart={this.props.myCart.totalItems} onClickCheckout={this.onClickCheckoutHandler}/>
				<div className="container single_product_container">
					<Breadcrumb values={breadcrumbValues}/>
					<div className="row">
						<div className="col-lg-7">
							<div className="single_product_pics">
								<div className="row">
									<div className="col-lg-3 thumbnails_col order-lg-1 order-2">
										<div className="single_product_thumbnails">
											{this.renderThumbnails(thumbnails, selectedThumb)}
										</div>
									</div>
									<div className="col-lg-9 image_col order-lg-2 order-1">
										<div className="single_product_image">
											<div className="single_product_image_background" style={{backgroundImage: selectedImageUrl}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="product_details">
								<div className="product_details_title">
									<h2>{productDetail.name}</h2>
									<p>{productDetail.shortDescription}</p>
								</div>
								<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
									<span className="ti-truck"></span><span>free delivery</span>
								</div>
								<div className="original_price">${productDetail.originalPrice}</div>
								<div className="product_price">${productDetail.salePrice}</div>
								<ul className="star_rating">
									<li><i className="fa fa-star" aria-hidden="true"></i></li>
									<li><i className="fa fa-star" aria-hidden="true"></i></li>
									<li><i className="fa fa-star" aria-hidden="true"></i></li>
									<li><i className="fa fa-star" aria-hidden="true"></i></li>
									<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								</ul>
								<div className="product_color">
									<span>Select Color:</span>
									<ul>
										<li style={{background: '#e54e5d'}}></li>
										<li style={{background: '#252525'}}></li>
										<li style={{background: '#60b3f3'}}></li>
									</ul>
								</div>
								<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
									<span>Quantity:</span>
									<QuantitySelection value={quantity} onMinus={this.onMinusQuantity} onPlus={this.onPlusQuantity}></QuantitySelection>
									<AddToCart onClick={this.onClickAddToCartHandler}></AddToCart>
									<div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
	    );
    }
}


const mapStateToProps = (state) => {
	const {
		productDetail = {
		},
		myCart,
	} = state;

	return {
		productDetail: productDetail.detail,
		category: productDetail.category,
		myCart,
	};
};

// at the moment we share the same actions with NewArrivalBlock for fetching category, product
const mapDispatchToProps = {
	getProductDetail,
	getOneCategory,
	addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);

// export default ProductDetailPage;
