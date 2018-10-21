import React from 'react';
import './style.css';

class FilterByPrice extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
		const divStyle={
			border:0,
			color:'#f6931f',
			fontWeight: 'bold'
		}
        return(
            <div className="sidebar_section">
				<div className="sidebar_title">
					<h5>Filter by Price</h5>
				</div>
				<p>
					<input type="text" id="amount" readOnly style={divStyle}/>
				</p>
				<div id="slider-range"></div>
				<div className="filter_button"><span>filter</span></div>
			</div>

        );
    }
}

export default FilterByPrice