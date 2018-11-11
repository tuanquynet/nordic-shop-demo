import React from "react";
import "./style.css";

import SortingPerPageBar from './../SortingPerPageBar/index';
import ProductList from "../ProductList";

class CategoryPageMainContent extends React.Component{
    render(){
        return(
            <div className="main_content">
                <div className="row">
					<div className="col">
                        <SortingPerPageBar
							selectedSortOption={this.props.selectedSortOption}
							onChangeSortOption={this.props.onChangeSortOption}
							selectedPerPage={this.props.selectedPerPage}
							onChangePerPage={this.props.onChangePerPage}
							totalPage={this.props.totalPage}
							selectedPageNum={this.props.selectedPageNum}
							onChangePageNum={this.props.onChangePageNum}
							/>
						<ProductList
							products={this.props.products}
							onClickProduct={this.props.onClickProduct}
							onClickAddToCart={this.props.onClickAddToCart}
							/>
                        <SortingPerPageBar
							selectedSortOption={this.props.selectedSortOption}
							onChangeSortOption={this.props.onChangeSortOption}
							selectedPerPage={this.props.selectedPerPage}
							onChangePerPage={this.props.onChangePerPage}
							totalPage={this.props.totalPage}
							selectedPageNum={this.props.selectedPageNum}
							onChangePageNum={this.props.onChangePageNum}
							/>
                    </div>
                </div>

             </div>
        );
    }
}

export default CategoryPageMainContent;
