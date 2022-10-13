import './App.css';
import {Routes, Route, Outlet} from "react-router-dom";
import RoutedNavbar from "./components/navbar/RoutedNavbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      	<input id="navToggle" className="App-navToggle" type="checkbox"/>
      	<RoutedNavbar/>
      </header>
      <main className="App-main">
      	<Outlet/>
      </main>
      <Routes>
			<Route path="/" element={<footer className="App-footer">© Copyright {new Date().getFullYear()}</footer>}/>
			<Route path="*" element={<footer className="App-footer App-footer-black">© Copyright {new Date().getFullYear()}</footer>}/>
	  </Routes>
    </div>
  );
}

export default App;
