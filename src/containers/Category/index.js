import React from 'react';
import { connect } from 'react-redux';
import assignDeep from 'assign-deep';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./style.css";
// import CategoryList from '../../components/CategoryList';
import Breadcrumb from '../../components/Breadcrumb';
// import PerPageDropDown from '../../components/PerPageDropDown';
import ShippingInfoBar from './../../components/ShippingInfoBar/index';
import CategoryPageSideBar from './../../components/CategoryPageSideBar/index';
import CategoryPageMainContent from './../../components/CategoryPageMainContent/index';
// import products from "./../../data/products-in-cart.json";
import config from "../../config";

import { getCategories } from '../../actions/category';
import { getProductByCategory, getProducts } from '../../actions/product';

class Category extends React.Component{
    state = {
        categories: {
			total: 0,
			data: [],
		},
        products: {
			total: 0,
			data: [],
		},
		selectedCategoryId: 'all',
		selectedSortOption: '',
		selectedPerPage: 6,
		selectedPageNum: 1,
		totalPage: 1,
		selectedFilterPrice: {
			min: null,
			max: null,
		},
    }

    componentDidMount() {
		this.state.selectedCategoryId = this.props.match.params.catogoryId || 'all';
		this.fetchCategories();
		this.fetchProducts();
    }

	getRequestQueryOption = () => {
		const {
			selectedPerPage,
			selectedPageNum,
			selectedFilterPrice,
			selectedSortOption,
			selectedCategoryId,
		} = this.state;
		let queryOption = {};

		// pagination
		queryOption = {
			...queryOption,
			limit: selectedPerPage,
			skip: (selectedPageNum - 1) * selectedPerPage,
		};

		// filter by category
		if (selectedCategoryId && selectedCategoryId !== 'all') {
			queryOption = assignDeep(
				queryOption,
				{
					where: {categoryId: selectedCategoryId},
				}
			);
		}

		// filter
		if (selectedFilterPrice.min && selectedFilterPrice.max) {
			queryOption = assignDeep(
				queryOption,
				{
					where: {
						and: [
							{salePrice: {gte: selectedFilterPrice.min}},
							{salePrice: {lte: selectedFilterPrice.max}},
						]
					},
				}
			);
		}

		// sorting
		if (selectedSortOption) {
			const order = selectedSortOption === 'price'
				? ['salePrice ASC']
				: ['name ASC'];

			queryOption = {
				...queryOption,
				order,
			};
		}

		return queryOption;
	}

	fetchCategories = () => {
		this.props.getCategories(`${config.apiUrl}/categories`);
	}

    fetchProducts() {
		const {selectedCategoryId: categoryId} = this.state;
		const queryOption = this.getRequestQueryOption();
        const url = `${config.apiUrl}/products?filter=${JSON.stringify(queryOption)}`;

		this.props.getProducts(url);
    }

    onChangeCategory = (categoryId) => {
		this.state.selectedCategoryId = categoryId;
		// reset pagination
		this.state.selectedPageNum = 1;
        this.fetchProducts();
    }

    onClickProductHandler = (productId) => {
		this.props.history.push(`/product/${productId}`);
    }

	onChangeSortOptionHandler = (selectedSortOption) => {
		console.log('onChangeSortOptionHandler ', selectedSortOption);
		this.state.selectedSortOption = selectedSortOption;
		this.fetchProducts();
	}

	onChangePerPageHandler = (selectedPerPage) => {
		console.log('selectedPerPage ', selectedPerPage);
		this.state.selectedPerPage = selectedPerPage;
		this.state.selectedPageNum = 1;
		this.fetchProducts();
	}

	onChangePageNumHandler = (selectedPageNum) => {
		console.log('selectedPerPage ', selectedPageNum);
		this.state.selectedPageNum = selectedPageNum;
		this.fetchProducts();
	}

	onChangeFilterPriceHandler = ({min,max}) => {
		console.log('onChangeFilterPriceHandler ');
		this.state.selectedPageNum = 1;
		this.state.selectedFilterPrice = {
			min,
			max,
		};
		this.fetchProducts();
	}

    render() {
        const {
			categoryList = [],
			selectedCategoryId,
			selectedSortOption,
			selectedPerPage,
			selectedPageNum,
		} = this.state;
		const {
			categories,
			products,
		} = this.props;
		const selectedCategory = categories.data
			.filter((item) => item.id === selectedCategoryId)[0];
		const breadcrumbValues = [].concat({
			label: 'Home',
			link: '/',
		}).concat({
			label: selectedCategory ? selectedCategory.name : 'all',
			link: selectedCategory ? `/categories/${selectedCategory.id}` : '/categories'
		});
		const totalPage = Math.ceil(products.total / (selectedPerPage || 1));

        return(
            <div className="super_container">
				<Header />
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrumb values={breadcrumbValues}/>
                            {categoryList
								? <CategoryPageSideBar
									selectedCategory={this.state.selectedCategoryId}
									onChangeCategory={this.onChangeCategory}
									categoryList={categories.data}
									onChangeFilterPrice={this.onChangeFilterPriceHandler}/>
                                : <h3>Loading...</h3>}
							<CategoryPageMainContent
								products={products.data}
								selectedSortOption={selectedSortOption}
								onClickProduct={this.onClickProductHandler}
								onChangeSortOption={this.onChangeSortOptionHandler}
								selectedPerPage={selectedPerPage}
								onChangePerPage={this.onChangePerPageHandler}
								selectedPageNum={selectedPageNum}
								totalPage={totalPage}
								onChangePageNum={this.onChangePageNumHandler}
								/>
                        </div>
                    </div>
                </div>
                <ShippingInfoBar/>
                <Footer />
            </div>
        )
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

// at the moment we share the same actions with NewArrivalBlock for fetching category, product
const mapDispatchToProps = {
	getCategories,
	getProductByCategory,
	getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
