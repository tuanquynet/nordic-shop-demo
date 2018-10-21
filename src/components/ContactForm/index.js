import React from "react"
import "./style.css";

class ContactForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(            
			<div className="col-lg-6 get_in_touch_col">
                <div className="get_in_touch_contents">
                    <h1>Get In Touch With Us!</h1>
					<p>Fill out the form below to recieve a free and confidential.</p>
					<form>
                    <div>
							<input id="input_name" className="form_input input_name input_ph" type="text" name="name" placeholder="Name" required="required" data-error="Name is required."></input>
							<input id="input_email" className="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required."></input>
							<input id="input_website" className="form_input input_website input_ph" type="url" name="name" placeholder="Website" required="required" data-error="Name is required."></input>
							<textarea id="input_message" className="input_ph input_message" name="message"  placeholder="Message" rows="3" required data-error="Please, write us a message."></textarea>
						</div>
						<div>
							<button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">send message</button>
						</div>
					</form>
                </div>
             </div>
        )
    }
}

export default ContactForm;