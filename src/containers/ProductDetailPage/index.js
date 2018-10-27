import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import QuantitySelection from '../../components/QuantitySelection';
import AddToCart from "../../components/AddToCart";
import config from "../../config";

import "./style.css";

class ProductDetailPage extends Component {
	state = {
		productDetail: {},
		quantity: 0,
		category: {},
		selectedThumb: 0,
	}

	componentDidMount() {
		this.fetchProduct(this.props.match.params.id);
	}

	fetchProduct(productId) {
		// productId = '5bb2e59c133ed3128d12eef5';
		fetch(new Request(`${config.apiUrl}/products/${productId}`))
			.then(response=> response.json())
			.then(response=>{
					const productDetail = response.body;
					this.setState({
						productDetail,
					});
					this.fetchCategoryDetail(productDetail.categoryId);
					console.log('products productDetail');
			}).catch(err=>{
					console.log("Error Get productDetail");
			});
	}

	fetchCategoryDetail(categoryId) {
		fetch(new Request(`${config.apiUrl}/categories/${categoryId}`))
			.then(response=> response.json())
			.then(response=>{
					this.setState({
						category: response.body,
					});
					console.log('products productDetail');
			}).catch(err=>{
					console.log("Error Get productDetail");
			});
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
			quantity: Math.max(0, quantity - 1),
		})
	}

	onPlusQuantity = () => {
		const {quantity} = this.state;
		this.setState({
			quantity: Math.min(10, quantity + 1),
		})
	}

    render() {
		const {productDetail = {}, selectedThumb} = this.state;
		const thumbnails = productDetail ? productDetail.thumbnails : [];
		const {images = []} = productDetail;
		const selectedImageUrl = images
			? `url(${images[selectedThumb]})`
			: 'url("")';
		const {quantity, category}  = this.state;
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
				<Header />
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
									<div class="col-lg-9 image_col order-lg-2 order-1">
										<div class="single_product_image">
											<div class="single_product_image_background" style={{backgroundImage: selectedImageUrl}}></div>
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
									<AddToCart></AddToCart>
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

export default ProductDetailPage;
