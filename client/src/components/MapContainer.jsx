import React from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import MAPS_API_KEY from "./../config.js";


const mapStyles = {
    width: '40%',
    height: '60%'
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onMarkerClick (props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true        
        });

    } 
        
    onClose (props) {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
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
                >
                <Marker onClick = {this.onMarkerClick}
                    name = {'Kenyatta International Convention Centre'
                }/>
                <InfoWindow
                    marker = {this.state.activeMarker}
                    visible = {this.state.showingInfoWindow}
                    onclose = {this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: MAPS_API_KEY.token
})(MapContainer);