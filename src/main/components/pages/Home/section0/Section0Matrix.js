import {Component} from "react";
import "./Section0Matrix.css";

class Sectiom0Matrix extends Component {
	render(){
		var cells = [];
		for(var i = 0; i < 8; i++){
			for(var j = 0; j < 4; j++){
				var red = 255;   //Math.random() * 256;
				var green = 100; //Math.random() * 256;
				var blue = 100; //Math.random() * 256;
				
				var cellStyle = {
						"--hoverColor1":`rgba(${red}, ${green}, ${blue}, 0)`,
						"--hoverColor2":`rgba(${red}, ${green}, ${blue}, 1)`,
				};
				
				if(Math.random() < 0.20){
					cellStyle = {
						...cellStyle,
						animation: `colorfader ${Math.random() * 6 + 6}s infinite`
					};
				}
				
				cells.push(<div key={i + " " + j} style={cellStyle} className="Section0Matrix-cell"></div>);
			}
		}
		
		
		return(
			<div className="Section0Matrix">
				{cells}
			</div>
		);
	}
}

export default Sectiom0Matrix;