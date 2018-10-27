import React from 'react';
import "./style.css";
import SortingDropDown from '../SortingDropDown';
import PerPageDropDown from '../PerPageDropDown';
class SortingPerPageBar extends React.Component{
    constructor(props){
        super(props)
    }        
    render(){
        return(
            <div className="product_sorting_container product_sorting_container_top">

                <SortingDropDown/>
                <PerPageDropDown/>

            </div>
        )
    }
}

export default SortingPerPageBar;
