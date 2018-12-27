import React from "react";
import ReactDOM from "react-dom";
import MapContainer from "./components/MapContainer.jsx";
import Recommendations from "./components/Recommendations.jsx";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Varela Round', 'sans-serif']
    }
})

ReactDOM.render(<div><Recommendations/> <MapContainer /> </div>, document.getElementById('map'));