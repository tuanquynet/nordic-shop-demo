import React from 'react';
import ProductCard from '../ProductCard';

import './style.css';

class NewArrivalBlock extends React.Component{
	constructor(prop){
		super(prop);
		this.onClickQuickCategory = this.onClickQuickCategory.bind(this);
	}

	categoryOfTypeAll = {id: 'all', name: 'all'}

	state = {selectedCategory: 'all'}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps');
		console.log(nextProps);
	}

	onClickQuickCategory(e){
		const categoryId = e.target.getAttribute('data-id');
/*
		this.setState({
			selectedCategory: categoryId
		}); */
		this.props.onClickQuickCategory(categoryId);
	}

	getCategoryClassName(categoryId, selectedCategoryId) {
		let className = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked';
		if (selectedCategoryId === categoryId) {
			className += ' active isChecked'
		}

		return className;
	}

	renderQuickCategoryBar = (categories, selectedCategoryId) => {
		categories = categories || [];

		const liItems = categories.map((item) => {
			return <li onClick={this.onClickQuickCategory} className={this.getCategoryClassName(item.id, selectedCategoryId)} data-id={item.id} data-filter="*">{item.name}</li>
		});

		return liItems.length
			? (<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
				{liItems}
				</ul>)
			: (null);
	}

	render(){
		const products = this.props.products.map(product => {
			return {
				...product,
				saleOf: product.saleOf ? product.saleOf : 0,
				isNew: !!product.isNew,
				salePrice: product.saleOf ? product.originalPrice - product.saleOf : 0,
			}
		});

		const {categories = [], selectedCategoryId} = this.props;

		return(
			<div className="new_arrivals">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							<div className="section_title new_arrivals_title">
								<h2>New Arrivals</h2>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col text-center">
							<div className="new_arrivals_sorting">
								{this.renderQuickCategoryBar([this.categoryOfTypeAll].concat(categories), selectedCategoryId)}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="product-grid" >
								{products.map(product =>(
									<ProductCard key={product.id} product={product} onClickAddToCart={this.props.onClickAddToCart} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default NewArrivalBlock;
