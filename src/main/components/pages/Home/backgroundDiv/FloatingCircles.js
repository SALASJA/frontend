import {Component} from "react";
import "./FloatingCircles.css";

class FloatingCircles extends Component {
	constructor(props){
		super(props);
		this.animationEndHandler = this.animationEndHandler.bind(this);
		var styles = new Map();
		var num = parseInt(props.num) || 5;
		
		var times = new Map();
		
		for(var i = 0; i < num; i++){
			var time = `${Math.random() * 10 + 5}s`;
			var circleStyle = {
				left: `${Math.random() * 100}vw`,
				top: `${Math.random() * 100 + (parseInt(this.props.top) || 0)}vh`,
				"--dx":`${Math.random() * 500 - 250}%`,
				"--dy":`${Math.random() * 500 - 250}%`,
				"--dscale":`${Math.floor(Math.random() * 3 + 1)}`,
				"--size": `${Math.floor(Math.random() * 10 + 10)}vw`,
				animationDuration: time
			};   
			
			times.set("floatingcircle" + i, time);
			styles.set("floatingcircle" + i, circleStyle);
		}
		this.state = {circleStyles: styles, circleTimes: times};
	}
	
	animationEndHandler(event){

		this.state.circleStyles.set(event.target.classList[1], {
				left: `${(Math.random() * 100)}vw`,
				top: `${(Math.random() * 100 + (parseInt(this.props.top) || 0))}vh`,
				"--dx":`${Math.random() * 500 - 250}%`,
				"--dy":`${Math.random() * 500 - 250}%`,
				"--dscale":`${Math.floor(Math.random() * 3 + 1)}`,
				"--size": `${Math.floor(Math.random() * 10 + 10)}vw`,
				animationDuration: `${this.state.circleTimes.get(event.target.classList[1])}s`
		});
		this.setState({circleStyles: this.state.circleStyles});
	}
	
	render(){
		var num = parseInt(this.props.num) || 5;
		var circles = [];
		for(var i = 0; i < num; i++){
			var currentCircle = "floatingcircle" + i;
			var circleStyle = this.state.circleStyles.get(currentCircle);
			circles.push(<div onAnimationIteration={this.animationEndHandler} key={i} style={circleStyle} className={`floatingcircle ${"floatingcircle" + i}`}></div>);
		}
		
		return (
			
			<>
				{circles}
			</>
		);
	}
}


export default FloatingCircles;