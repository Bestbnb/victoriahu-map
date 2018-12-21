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
            selectedPlace: {}, 
            lat: null,
            lng: null, 
            name: '',
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    componentDidMount() {
        var myHeaders = new Headers();
        console.log("mounted");
        fetch('/map', 
         { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
               )
        .then(function(response) {
            return response.json();
        })
        .then((data) => {
            console.log(data[0]);
            this.setState({
                name: data.name,
                lat: data.lat,
                lng: data.lng
            })
        })
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
                        lat: this.state.lat,
                        lng: this.state.lng
                    }}
                >
                <Marker onClick = {this.onMarkerClick}
                    name = {this.state.name
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