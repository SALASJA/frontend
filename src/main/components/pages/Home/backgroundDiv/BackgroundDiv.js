import {Component} from "react";
import FloatingCircles from "./FloatingCircles";
import "./BackgroundDiv.css";

class BackgroundDiv extends Component {
	render(){		
	
		return(
			<div className="BackgroundDiv">
				<div className="BackgroundDiv-artdiv">
				</div>
				<FloatingCircles top={200}/>
			</div>
		);
	}
}

export default BackgroundDiv;