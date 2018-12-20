import React from "react";
import {Map, GoogleApiWrapper } from 'google-maps-react';
import MAPS_API_KEY from "./../config.js";


const mapStyles = {
    width: '40%',
    height: '60%'
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <div> 
                <div>This is the map component.</div>
                <Map 
                    google={this.props.google} 
                    zoom = {14}
                    style = {mapStyles}
                    initialCenter={{
                        lat: -1.2884,
                        lng: 36.8233
                    }}
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: MAPS_API_KEY.token
})(MapContainer);