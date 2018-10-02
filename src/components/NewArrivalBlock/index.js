import React from 'react';
import ProductCard from '../ProductCard';

import './style.css';

class NewArrivalBlock extends React.Component{
	constructor(prop){
		super(prop);
		this.onClickQuickCategory = this.onClickQuickCategory.bind(this);
	}

	state = {selectedCategory: 'all'}

	onClickQuickCategory(e){
		const categoryId = e.target.getAttribute('data-id');

		this.setState({
			selectedCategory: categoryId
		});
	}

	getCategoryClassName(categoryId) {
		let className = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked';
		const {selectedCategory} = this.state;
		if (selectedCategory === categoryId) {
			className += ' active isChecked'
		}

		return className;
	}

	render(){

		let products = this.props.products.map(product => {
			return {
				...product,
				saleOf: product.saleOf ? product.saleOf : 0,
				isNew: !!product.isNew,
				salePrice: product.saleOf ? product.originalPrice - product.saleOf : 0,
			}
		});

		const {selectedCategory} = this.state;
		products = selectedCategory === 'all'
			? products
			: products.filter((item) => {
				return item.categoryId === selectedCategory;
			});

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
								<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
									<li onClick={this.onClickQuickCategory} className={this.getCategoryClassName('all')} data-id="all" data-filter="*">all</li>
									<li onClick={this.onClickQuickCategory} className={this.getCategoryClassName('cate002')} data-id="cate002" data-filter=".women">women's</li>
									<li onClick={this.onClickQuickCategory} className={this.getCategoryClassName('cate003')}  data-id="cate003" data-filter=".accessories">accessories</li>
									<li onClick={this.onClickQuickCategory} className={this.getCategoryClassName('cate001')}  data-id="cate001" data-filter=".men">men's</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="product-grid" >
								{products.map(product =>(
									<ProductCard key={product.id} {...product} />
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
