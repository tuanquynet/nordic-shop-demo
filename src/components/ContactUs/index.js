import React from "react"
import "./style.css";

class ContactUs extends React.Component{
    render(){
        var divstyle1 = {
            backgroundColor: "#3a61c9"
        }
        var divstyle2 = {
            backgroundColor: "#41a1f6"
        }
        var divstyle3 = {
            backgroundColor: "#fb4343"
        }
        var divstyle4 = {
            backgroundColor: "#8f6247"
        }
        return(
            <div className="col-lg-6 contact_col">
				<div className="contact_contents">
					<h1>Contact Us</h1>
					<p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
					<div>
						<p>(800) 686-6688</p>
						<p>info.deercreative@gmail.com</p>
					</div>
					<div>
						<p>mm</p>
					</div>
					<div>
						<p>Open hours: 8.00-18.00 Mon-Fri</p>
						<p>Sunday: Closed</p>
					</div>
				</div>


				<div className="follow_us_contents">
					<h1>Follow Us</h1>
					<ul className="social d-flex flex-row">
						<li><a href="#" style={divstyle1}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" style={divstyle2}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" style={divstyle3}><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li><a href="#" style={divstyle4}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>

			</div>
        )
    }
}

export default ContactUs;