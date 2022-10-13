import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './main/App';
import Home from "./main/components/pages/Home/Home";
import reportWebVitals from './utils/reportWebVitals';
import NotFound from "./main/components/pages/NotFound/NotFound";
import TodoList from "./main/components/pages/TodoList/TodoList";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  	<BrowserRouter>
  		<Routes>
    		<Route path="/" element={<App/>}>
    			<Route index element={<Home/>}/>
    			<Route path="*" element={<NotFound/>}/>
    			<Route path="todolist" element={<TodoList/>}/>
    		</Route>
    	</Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
