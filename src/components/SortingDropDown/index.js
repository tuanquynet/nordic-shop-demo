import React from 'react';
import "./style.css";
class SortingDropDown extends React.Component{
	sortOptions = [
		{
			label: 'Default Sorting',
			value: '',
		},
		{
			label: 'Price',
			value: 'price',
		},
		{
			label: 'Product Name',
			value: 'product-name',
		},
	]

	perPageOptions = [6,12,24]

	onClickSortOptionHandler = (e) => {
		this.props.onChangeSortOption(e.currentTarget.getAttribute('data-id'));
	}

	onClickPerPageHandler = (e) => {
		this.props.onChangePerPage(e.currentTarget.getAttribute('data-id'));
	}

    render(){
		const {selectedSortOption = '', selectedPerPage = 6} = this.props;
		const selectedSortOptionItem = this.sortOptions
			.filter(item => selectedSortOption === item.value)[0];

        return(
            <ul className="product_sorting">
				<li>
					<span className="type_sorting_text">{selectedSortOptionItem.label}</span>
				    <i className="fa fa-angle-down"></i>
			        <ul className="sorting_type">
						{this.sortOptions.map((item) => {
							return item.value === ''
								? (<li className={item.value === selectedSortOption ? 'active type_sorting_btn' : 'type_sorting_btn'}
									key={item.value} data-id={item.value} >
										<span>{item.label}</span>
									</li>)
								: <li className={item.value === selectedSortOption ? 'active type_sorting_btn' : 'type_sorting_btn'}
									key={item.value} data-id={item.value}
									onClick={this.onClickSortOptionHandler} >
										<span>{item.label}</span>
									</li>
						})}
						{/* <li className="type_sorting_btn" ><span>Default Sorting</span></li>
						<li className="type_sorting_btn" ><span>Price</span></li>
						<li className="type_sorting_btn" ><span>Product Name</span></li> */}
					</ul>
				</li>
				<li>
					<span>Show</span>
					<span className="num_sorting_text">{selectedPerPage}</span>
					<i className="fa fa-angle-down"></i>
					<ul className="sorting_num">
						{this.perPageOptions.map((item) => {
							return item.toString() === selectedPerPage.toString()
								? <li className="active num_sorting_btn"
									key={item} data-id={item}
									onClick={this.onClickPerPageHandler}><span>{item}</span>
									</li>
								: <li className="num_sorting_btn"
									key={item} data-id={item}
									onClick={this.onClickPerPageHandler}><span>{item}</span>
									</li>
						})}
					</ul>
				</li>
			</ul>
        )
    }
}

export default SortingDropDown;
