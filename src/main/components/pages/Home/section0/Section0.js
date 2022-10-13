import {Component} from "react";
import Section0Matrix from "./Section0Matrix";
import GitHub from "../../../../../images/png/GitHub.png";
import LinkedIn from "../../../../../images/png/LinkedIn.png";
import "animate.css";

import "./Section0.css";
import 'animate.css';

class Section0 extends Component {
	render(){
		return(
			<section id="section0" className="Section0">
				<Section0Matrix/>
				<h1>Let's Get Down to Earth</h1>
				<div className="section0-imageLinks">
					<a href="https://www.github.com/SALASJA"><img className="section0-img0" src={GitHub}/></a>
					<a href="https://www.linkedin.com/in/jorgesalastutoring"><img className="section0-img1" src={LinkedIn}/></a>
				</div>
				<div className="Section0-triangle"></div>
			</section>
		);
	}
}

export default Section0;