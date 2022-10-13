import {Component} from "react";
import BackgroundDiv from "./backgroundDiv/BackgroundDiv";
import Section0 from "./section0/Section0";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";

import "./Home.css";

class Home extends Component {
	render(){
		return(
			<div className="Home">
				<BackgroundDiv/>
				<Section0/>
				<Section1/>
				<Section2/>
				<Section3/>
			</div>
		);
	}
}

export default Home;