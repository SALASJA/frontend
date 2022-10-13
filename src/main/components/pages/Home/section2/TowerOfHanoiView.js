import {Component} from "react";
import TowerOfHanoi from "./TowerOfHanoi";
import "./TowerOfHanoiView.css";
import Song from "../../../../../music/Song.mp3";
class TowerOfHanoiView extends Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
		this.timerId = undefined;
		this.state = {hanoi: new TowerOfHanoi(1), selected:[]};
		//solution should be generated on the spot, need to define some state machines
	}
	
	
	clickHandler(event){
		console.log(event);
		
		if(event.target.className == "TowerOfHanoiView-solveButton"){
			this.state.hanoi.reset();
			this.setState({hanoi: this.state.hanoi, selected: []});
			this.timerId = setInterval(() => {
				var step = this.state.hanoi.getStep();
				if(!step){
					clearInterval(this.timerId);
					this.timerId = undefined;
					return;
				}
				
				if(this.state.hanoi.isLegal(step[0], step[1])){
					this.state.hanoi.operation(step[0], step[1]);
				}
			
				if(this.state.hanoi.isSolved()){
					var audio = new Audio(Song);
					audio.play();
				}
			
				this.setState({hanoi: this.state.hanoi, selected: []});
			
			}, 1000);
			return;
		}
		
		if(event.target.className == "TowerOfHanoiView-resetButton"){
			this.state.hanoi.reset();
			clearInterval(this.timerId);
			this.timerId = undefined;
			this.setState({hanoi: this.state.hanoi, selected: []});
			return;
		}
		var numDisks = this.state.hanoi.getNumDisks();
		
		if(numDisks < 6 && event.target.className == "TowerOfHanoiGame-addButton"){
			this.setState({hanoi: new TowerOfHanoi(numDisks + 1)});
			return;
		}
		
		if(numDisks > 1 && event.target.className == "TowerOfHanoiGame-removeButton"){
			this.setState({hanoi: new TowerOfHanoi(numDisks - 1)});
			return;
		}
		
		if(event.target.className == "TowerOfHanoi-towerL" || event.target.parentElement.className == "TowerOfHanoi-towerL"){
			this.state.selected.push("L");
		}
		
		if(event.target.className == "TowerOfHanoi-towerC" || event.target.parentElement.className == "TowerOfHanoi-towerC"){
			this.state.selected.push("C");
		}
		
		if(event.target.className == "TowerOfHanoi-towerR" || event.target.parentElement.className == "TowerOfHanoi-towerR"){
			this.state.selected.push("R");
		}
		console.log(event);
		console.log(this.state.selected);
		if(this.state.selected.length == 2){
			if(this.state.hanoi.isLegal(this.state.selected[0], this.state.selected[1])){
				this.state.hanoi.operation(this.state.selected[0], this.state.selected[1]);
			}
			
			if(this.state.hanoi.isSolved()){
				var audio = new Audio(Song);
				audio.play();
			}
			
			this.setState({hanoi: this.state.hanoi, selected: []});
			return;
		}
		
		
		
		this.setState({selected: this.state.selected});
	}
	
	
	renderTowers(){
		
		
		var color = ["red","orange", "yellow", "green", "blue", "purple"];
		var diskHeight = 100/6;
		var gameState = this.state.hanoi.getState();
		var towerStack = [];
		for(var stack of gameState.keys()){
			var tower = gameState.get(stack);
			var disk_stack = [];
			for(var i = tower.length - 1; i >= 0; i--){
				var diskStyle = {
					height: `${diskHeight}%`,
					width: `${(tower[i])/6 * 100}%`,
					backgroundColor: color[tower[i] - 1]
				};
				disk_stack.push(<div key={stack+tower[i]} style={diskStyle}></div>);
			}
			towerStack.push(<div onClick={this.clickHandler} key={stack} className={"TowerOfHanoi-tower" + stack}>{disk_stack}</div>);
		}
		
		return (
			<>
				{towerStack}
			</>
		);
	}
	
	render(){
		return (
			<div className="TowerOfHanoiGame">
				<p>{"Selected: " + this.state.selected.toString()}</p>
				<div className="TowerOfHanoi-towers">
						{this.renderTowers()}
				</div>
				<div className="TowerOfHanoiView-button-wrapper">
						<button onClick={this.clickHandler}  className="TowerOfHanoiView-solveButton">Solve</button>
						<button onClick={this.clickHandler}  className="TowerOfHanoiView-resetButton">Reset</button>
				</div>
				<div className="TowerOfHanoiGame-button-wrapper">
					<button onClick={this.clickHandler} className="TowerOfHanoiGame-addButton">+</button>
					<button onClick={this.clickHandler} className="TowerOfHanoiGame-removeButton">-</button>
				</div>
			</div>
		);
	}
}				
			


export default TowerOfHanoiView;