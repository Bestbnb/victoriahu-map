import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import './../dist/public/index.css';
// import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<div><App /> </div>, document.getElementById('map'));

window.Apppeanut = App;