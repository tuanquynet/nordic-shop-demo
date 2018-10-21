import React from "react";
import "./style.css"

class QuantitySelection extends React.Component{
    render(){
        return(
		    <div className="quantity_selector">
			    <span className="minus" onClick={this.props.onMinus}><i className="fa fa-minus" aria-hidden="true"></i></span>
			    <span id="quantity_value">{this.props.value}</span>
			    <span className="plus" onClick={this.props.onPlus}><i className="fa fa-plus" aria-hidden="true"></i></span>
		    </div>
        )
    }
}
export default QuantitySelection;
