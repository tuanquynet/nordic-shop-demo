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
                        <SortingPerPageBar/>
                        <ProductList products={this.props.products} onClickProduct={this.props.onClickProduct}/>
                        <SortingPerPageBar/>
                    </div>
                </div>

             </div>
        );
    }
}

export default CategoryPageMainContent;
