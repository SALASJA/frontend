import {Component} from "react";
import TechShelf from "./TechShelf";
import "./Section1.css";

class Section1 extends Component {
	render(){
		return(
			<section id="section1" className="Section1">
				<TechShelf/>
				<div className="section1-text">
					<p>
						I'm <strong>Jorge Salas</strong> and I'm a developer that's experienced in 
						<strong> many technologies</strong>.
						I also build <strong><em>Responsive Full Stack Web Applications</em></strong> !
					</p>
				</div>
			</section>
		);
	}
}

export default Section1;