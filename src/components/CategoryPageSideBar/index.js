import React from "react"
import "./style.css"
import CategoryList from './../CategoryList/index';
import FilterByPrice from './../FilterByPrice/index';
import FilterBySizeColor from './../FilterBySizeColor/index';
class CategoryPageSideBar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <CategoryList {...this.props}/>
                <FilterByPrice/>
                <FilterBySizeColor/>
            </div>
        );
    }
} 

export default CategoryPageSideBar;