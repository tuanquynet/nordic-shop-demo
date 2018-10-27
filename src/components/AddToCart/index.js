import React from "react";
import "./style.css"

class AddToCart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){        
        return(            
            <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
           
			
        )
    }
}
export default AddToCart;