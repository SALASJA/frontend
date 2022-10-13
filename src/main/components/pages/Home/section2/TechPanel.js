import {Component} from "react";
import TowerOfHanoiView from "./TowerOfHanoiView";
import "./TechPanel.css";


class TechPanel extends Component {
	render(){
		return (
			<div className="TechPanel">
				<TowerOfHanoiView/>
			</div>
		)
	}
}

export default TechPanel;