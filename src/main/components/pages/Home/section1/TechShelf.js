import {Component} from "react";
import "./TechShelf.css";
import C from          "../../../../../images/svg/devicon/icons/c/c-original.svg";
import Cpp from        "../../../../../images/svg/devicon/icons/cplusplus/cplusplus-original.svg";
import Python from     "../../../../../images/svg/devicon/icons/python/python-original.svg";
import Java from       "../../../../../images/svg/devicon/icons/java/java-original.svg";
import JavaScript from "../../../../../images/svg/devicon/icons/javascript/javascript-original.svg";
import PHP from        "../../../../../images/svg/devicon/icons/php/php-original.svg";
import Latex from      "../../../../../images/svg/devicon/icons/latex/latex-original.svg";
import Bash from       "../../../../../images/svg/devicon/icons/bash/bash-original.svg";
import Html from       "../../../../../images/svg/devicon/icons/html5/html5-original.svg";
import CSS from        "../../../../../images/svg/devicon/icons/css3/css3-original.svg";
//import JQuery from     "../../../../../images/svg/devicon/icons/jquery/jquery-original.svg";
import ReactLogo from  "../../../../../images/svg/logo.svg";
import Linux from      "../../../../../images/svg/devicon/icons/linux/linux-original.svg";
import Express from    "../../../../../images/svg/devicon/icons/express/express-original.svg";
import Apache from      "../../../../../images/svg/devicon/icons/apache/apache-original.svg";
import Nginx from    "../../../../../images/svg/devicon/icons/nginx/nginx-original.svg";
import Git from      "../../../../../images/svg/devicon/icons/git/git-original.svg";
import "animate.css";
 

class TechShelf extends Component {
	constructor(props){
		super(props);
		this.state = {row: 0, column: 0, index:0};
		this.animationIterationHandler = this.animationIterationHandler.bind(this);
		this.animations = ["rubberBand","headShake","swing","tada","wobble","jello","heartBeat"];
	}
	
	animationIterationHandler(event){
		setTimeout(() => {
			this.setState((state, props) => ({row: Math.floor(Math.random() * 4), column: Math.floor(Math.random() * 4), index: Math.floor(Math.random() * this.animations.length)}));
		}, 3000);

	}
	
	render(){
		var images = [C, Cpp, Python, Java, 
		              JavaScript,PHP, Latex, Bash, 
		              Html, CSS, ReactLogo, Linux, 
		              Express, Apache, Nginx,Git];
		return (
			<div className="TechShelf">
				{images.map((image,i) => <img key={i} src={image} onAnimationEnd={ (i == this.state.row * 4 + this.state.column) ? this.animationIterationHandler : undefined} style={{"--animation-name": this.animations[Math.floor(Math.random() * this.animations.length)]}} className={`animate__animated ${(i == this.state.row * 4 + this.state.column) ? "animate__" + this.animations[Math.floor(Math.random() * this.animations.length)] : ""}`}/> )}
			</div>
		)
	}
}
///Users/jorgesalas/Documents/programming/HTML_CSS_JavaScript/backend/deploy_second_website_example/frontend/src/images/svg

export default TechShelf;