import React from "react"
import "./style.css";
import Header from './../../components/Header/index';

import Footer from './../../components/Footer/index';
import ShippingInfoBar from './../../components/ShippingInfoBar/index';
import Breadcrumb from "../../components/Breadcrumb";
import ContactUs from "../../components/ContactUs";
import ContactForm from './../../components/ContactForm/index';
class Contact extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="super_container">
            <Header />
            <div className="container contact_container">
                <div className="row">
			        <div className="col">
                        <div className="col product_section clearfix">
                            <Breadcrumb/>                            
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col">
                        <div id="google_map">
                            <div className="map_container">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ContactUs/>
                    <ContactForm/>
                </div>
            </div>           
            <Footer />
            
            </div>
        )
    }
}

export default Contact;