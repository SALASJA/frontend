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
					<Route path="*" element={<Link to="/#section0"><h1>jspro.dev</h1></Link>}/>
				</Routes>
				<div className="NavBar-menu">
					<div className="NavBar-hamburger-fakesquare-filler">
					</div>
					<ul style={{visibility:"hidden"}}>
						<li className="NavBar-Home">
							<Link to="/#section0" style={{display:"flex"}}> Home</Link>
						</li>
						
						<li>
							<Link to="/#section1" style={{visibility:"hidden"}}>Skills</Link>
						</li>
				
						<li>
							<Link to="/#section2" style={{visibility:"hidden"}}>Projects</Link>
						</li>
				
						<li>
							<Link to="/#section3" style={{visibility:"hidden"}}>Contact</Link>
						</li>
						<li>
							<a href={Resume} style={{visibility:"hidden"}}>Resume</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}


export default NavBar;