import React from 'react';
import "./style.css";
import SortingDropDown from '../SortingDropDown';
import PerPageDropDown from '../PerPageDropDown';

class SortingPerPageBar extends React.PureComponent{
    render(){
        return(
            <div className="product_sorting_container product_sorting_container_top">
                <SortingDropDown {...this.props}/>
                <PerPageDropDown {...this.props}/>
            </div>
        )
    }
}

export default SortingPerPageBar;
