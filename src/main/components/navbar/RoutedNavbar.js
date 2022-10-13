import {Component} from "react";
import NavBar from "./NavBar";
import NotfoundNavBar from "./NotfoundNavBar";
import {Routes, Route} from "react-router-dom";

class RoutedNavbar extends Component {
	render(){
		return (
			<Routes>
				<Route path="/" element={<NavBar/>}/>
				<Route path="*" element={<NotfoundNavBar/>}/>
			</Routes>
		);
	}
}

export default RoutedNavbar;