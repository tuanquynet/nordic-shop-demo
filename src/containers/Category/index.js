import React from 'react';
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

class Category extends React.Component{
    state = {
        categoryList: [],
        products: [],
        selectedCategoryId: 'all'
    }

    componentDidMount() {
		this.setState({
			selectedCategoryId: this.props.match.params.categoryId
		});
        fetch(new Request(`${config.apiUrl}/categories`))
            .then(response=> response.json())
            .then(response=>{
                const categoryList=response.body;
                this.setState({
                    categoryList,
                })
                console.log(response.body);
            }).catch(err=>{
                console.log("Error Get Categories");
            });
        this.fetchProducts(this.state.selectedCategoryId)
            .then((products) => {
                this.setState({
                    products: products || [],
                })
            });
    }

    fetchProducts(categoryId) {
        console.log('categoryId', categoryId);
        const url = 'all' === categoryId
            ? `${config.apiUrl}/products`
            : `${config.apiUrl}/categories/${categoryId}/products`
        return fetch(new Request(url))
            .then(response=> response.json())
            .then(response=> response.body)
            .catch(err=>{
                console.log("Error Get Categories");
            });
    }

    onChangeCategory = (categoryId) => {
        this.fetchProducts(categoryId)
            .then((products) => {
                this.setState({
                    products,
                    selectedCategoryId: categoryId
                })
            });
    }

    onClickProductHandler = (productId) => {
		this.props.history.push(`/product/${productId}`);
    }

    render() {
        const {categoryList = [], selectedCategoryId} = this.state;
		const products = this.state.products;
		const selectedCategory = categoryList.filter((item) => item.id === selectedCategoryId)[0];
		const breadcrumbValues = [].concat({
			label: 'Home',
			link: '/',
		}).concat({
			label: selectedCategory ? selectedCategory.name : 'all',
			link: selectedCategory ? `/categories/${selectedCategory.id}` : '/categories'
		});

        return(
            <div className="super_container">
				<Header />
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrumb values={breadcrumbValues}/>
                            {categoryList
                                ? <CategoryPageSideBar selectedCategory={this.state.selectedCategoryId} onChangeCategory={this.onChangeCategory} categoryList={categoryList}/>
                                : <h3>Loading...</h3>}
                            <CategoryPageMainContent products={products} onClickProduct={this.onClickProductHandler}/>
                        </div>
                    </div>
                </div>
                <ShippingInfoBar/>
                <Footer />
            </div>
        )
    }
}

export default Category;
