import React from 'react';
import './style.css';

class FilterBySizeColor extends React.Component{
    constructor(props){
		super(props)		
    }
    render(){
        return(
			<div>
				<div className="sidebar_section">
					<div className="sidebar_title">
						<h5>Sizes</h5>
					</div>
					<ul className="checkboxes">
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>S</span></li>
						<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>M</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>L</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XL</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XXL</span></li>
					</ul>
				</div>			
				<div className="sidebar_section">
					<div className="sidebar_title">
						<h5>Color</h5>
					</div>
					<ul className="checkboxes">
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Black</span></li>
						<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>Pink</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
						<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
					</ul>
					<div className="show_more">
						<span><span>+</span>Show More</span>
					</div>					
				</div>
			</div>

        );
    }
}

export default FilterBySizeColor