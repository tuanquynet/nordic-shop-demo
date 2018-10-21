import React from 'react';
import "./style.css";
class CategoryList extends React.Component{
	onClickCategory = (e) => {
		const cateId = e.target.getAttribute('data-cateId');
		this.props.onChangeCategory(cateId);
	}
    render(){
		const {categoryList, selectedCategory} = this.props;
		const allCategories = [
			...categoryList,
			{
				id: 'all',
				name: 'all',
			},
		]
        return(
            <div className="sidebar_section">
				<div className="sidebar_title">
					<h5>Product Category</h5>
				</div>
				<ul className="sidebar_categories">
					{allCategories.length
						? (allCategories.map((item) => 
							<li key={item.id} className={item.id === selectedCategory ? 'active' : ''}><a href="#" data-cateId={item.id} onClick={this.onClickCategory}>{item.name}</a></li>
							))
						: <div>Loading</div>
					}
				</ul>
			</div>
        )
    }
}

export default CategoryList;