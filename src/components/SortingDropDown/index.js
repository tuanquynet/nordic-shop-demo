import React from 'react';
import "./style.css";
class SortingDropDown extends React.Component{
    constructor(props){
		super(props)
	   }        
    render(){
        return(
           
                <ul className="product_sorting">
					<li>
						<span className="type_sorting_text">Default Sorting</span>
					    <i className="fa fa-angle-down"></i>
				        <ul className="sorting_type">
							<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
							<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
							<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
						</ul>
					</li>
					<li>
						<span>Show</span>
						<span className="num_sorting_text">6</span>
						<i className="fa fa-angle-down"></i>
						<ul className="sorting_num">
							<li className="num_sorting_btn"><span>6</span></li>
							<li className="num_sorting_btn"><span>12</span></li>
							<li className="num_sorting_btn"><span>24</span></li>
						</ul>
					</li>
				</ul>

           
        )
    }
}

export default SortingDropDown;
