import {Component} from "react";
import {Link} from "react-router-dom";
import TechPanel from "./TechPanel";
import "./Section2.css";

class Section2 extends Component {
	render(){
		return(
			<section id="section2" className="Section2">
				<div className="Section2-contentdiv">
					<TechPanel/>
					<Link to="todolist"><p>Click here to see a list of my projects!</p></Link>
				</div>
			</section>
		);
	}
}

export default Section2;