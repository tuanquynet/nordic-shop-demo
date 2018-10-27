import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBanner from '../../components/HeroBanner';
import NewArrivalBlock from './../../components/NewArrivalBlock';
import DealOfTheWeekBlock from '../../components/DealOfTheWeekBlock';
import ShippingInfoBar from './../../components/ShippingInfoBar/index';
import QuickCategoryBar from '../../components/QuickCategoryBar';
import products from '../../data/products.json';

import config from '../../config';

import { getCategories } from '../../actions/category';
import { getProductByCategory, getProducts } from '../../actions/product';

import './style.css'

class HomePage extends Component {
	state = {
		selectedCategoryId: 'all',
	}

	componentDidMount() {
		this.fetchCategories();
		this.fetchProductByCategory(this.state.selectedCategoryId)
	}

	fetchCategories = () => {
		this.props.getCategories(`${config.apiUrl}/categories`);
	}

	fetchProductByCategory = (categoryId) => {
		if (categoryId === 'all') {
			this.props.getProducts(`${config.apiUrl}/products`);
		} else {
			this.props.getProductByCategory(`${config.apiUrl}/categories/${categoryId}/products`);
		}
		this.setState({
			selectedCategoryId: categoryId,
		});
	}

	onClickQuickCategoryHandler = (categoryId) => {
		this.fetchProductByCategory(categoryId);
	}

	render() {
		const {categories, products} = this.props;
		return (
			<div className="super_container">
				<Header />
				<HeroBanner />
				<QuickCategoryBar />
				<div>
					<NewArrivalBlock
						selectedCategoryId={this.state.selectedCategoryId}
						onClickQuickCategory={this.onClickQuickCategoryHandler}
						categoryTotal={categories.total}
						categories={categories.data}
						productTotal={products.total}
						products={products.data}/>
					<DealOfTheWeekBlock/>
					<ShippingInfoBar/>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {
		products = {
			total: 0,
			data: [],
		},
		categories = {
			total: 0,
			data: [],
		},
	} = state;

	return {
		products: {
			total: products.total,
			data: products.records || [],
		},
		categories: {
			total: categories.total,
			data: categories.records || [],
		},
	};
};

const mapDispatchToProps = {
	getCategories,
	getProductByCategory,
	getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
