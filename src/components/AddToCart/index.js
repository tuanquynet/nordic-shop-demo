import React from "react";
import "./style.css"

class AddToCart extends React.Component{
    render(){
        return(
            <div className="red_button add_to_cart_button"><a onClick={this.props.onClick} href="#">add to cart</a></div>
        )
    }
}
export default AddToCart;
