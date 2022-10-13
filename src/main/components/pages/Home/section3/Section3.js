import {Component} from "react";
import "./Section3.css";

class Section3 extends Component {
	constructor(props){
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
		this.messageChangeHandler = this.messageChangeHandler.bind(this);
		this.emailChangeHandler = this.emailChangeHandler.bind(this);
		this.reasonChangeHandler = this.reasonChangeHandler.bind(this);
		this.state = {reasonValue: "", emailValue:"", messageValue:""};
	}
	
	submitHandler(event){
		event.preventDefault();		
		fetch('/api/sendemail', {
		  method: 'POST', // or 'PUT'
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(this.state)
		})
		.then( res => res.json())
		.then(res => {
			console.log(res);
			alert("message sent!");
		},err => {
			alert("message failed to send!");
			console.log(err);
		});
		
		
		
		
		//fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options).then(response => console.log(response), err => console.log(err));
		
		//console.log(this.state);

	}
	
	messageChangeHandler(event){
		this.setState({messageValue: event.target.value});
	}
	
	emailChangeHandler(event){
		this.setState({emailValue: event.target.value});
	}
	
	reasonChangeHandler(event){
		this.setState({reasonValue: event.target.value});
	}
	
	
	render(){
		return(
			<section id="section3" className="Section3">
				<p>Otherwise reach out to me here</p>
				<form onSubmit={this.submitHandler} className="section3-form">
					<input type="text" placeholder="subject" className="section3-reasonInput" name="reason" value={this.state.reasonValue} onChange={this.reasonChangeHandler}/>
					<input type="text" placeholder="email" className="section3-emailInput"  name="email"  value={this.state.emailValue}  onChange={this.emailChangeHandler}/>
					<textarea className="section3-messageInput" placeholder="message" name="message" value={this.state.messageValue} onChange={this.messageChangeHandler}>
					</textarea>
					<input type="submit" className="section3-button" value="Send Message"/>
				</form>
			</section>
		);
	}
}

export default Section3;