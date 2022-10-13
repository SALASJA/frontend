import {Component} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Resume from "../../../documents/resume.pdf";
import "./NavBar.css";

class NavBar extends Component {

	render() {
		//add a javascrupt based media query for pdf page download
		//need to use react router to conditionally controll the nav layout
		return (
			<nav className="NavBar">
				<div className="NavBar-hamburger-square-wrapper">
					<label htmlFor="navToggle" className="NavBar-hamburger-square">
					</label>
				</div>
				<Routes>
					<Route path="/" element={<a href="#section0"><h1>jspro.dev</h1></a>}/>
					<Route path="*" element={<Link to="/"><h1>jspro.dev</h1></Link>}/>
				</Routes>
				<div className="NavBar-menu">
					<div className="NavBar-hamburger-fakesquare-filler">
					</div>
					<ul>
						<li className="NavBar-Home">
							<a href="#section0"> Home</a>
						</li>
						
						<li>
							<a href="#section1">Skills</a>
						</li>
				
						<li>
							<a href="#section2">Projects</a>
						</li>
				
						<li>
							<a href="#section3">Contact</a>
						</li>
						<li>
							<a href={Resume}>Resume</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}


export default NavBar;