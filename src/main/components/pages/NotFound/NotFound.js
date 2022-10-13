import {Component} from "react";
import FloatingCircles from "../Home/backgroundDiv/FloatingCircles";
import "./NotFound.css";

class NotFound extends Component {
	
	render(){
		return (
			<section className="NotFound">
				<div className="NotFound-art">
					<FloatingCircles/>
				</div>
				<h1>Sorry page not found or in development!</h1>
			</section>
		)
	}	
}

export default NotFound;