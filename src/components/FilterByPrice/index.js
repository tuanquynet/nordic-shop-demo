import React from 'react';
import InputRange from 'react-input-range';

import './style.css';

class FilterByPrice extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			priceFilterValue: {
				min: 100,
        		max: 700,
			},
		};
	}

	onChangeInputRange = (value) => {
		console.log(value);
		this.setState({ priceFilterValue: value });
	}

	onClickFilterButtonHandler = () => {
		this.props.onChangeFilterPrice(this.state.priceFilterValue);
	}

    render(){
        return(
            <div className="sidebar_section">
				<div className="sidebar_title">
					<h5>Filter by Price</h5>
				</div>
				<p>
					<InputRange
				        maxValue={1000}
						minValue={10}
						value={this.state.priceFilterValue}
						onChange={this.onChangeInputRange} draggableTrack />
				</p>
				<div className="filter_button" onClick={this.onClickFilterButtonHandler}>
					<span>filter</span>
				</div>
			</div>

        );
    }
}

export default FilterByPrice
