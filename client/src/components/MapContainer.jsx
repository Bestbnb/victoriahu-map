import React from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polygon} from 'google-maps-react';
import MAPS_API_KEY from "./../config.js";
// import Circle from 'google-maps-react';
// import Circle from "react-google-maps";

const mapStyles = {
    width: '30%',
    height: '30%', 
};


class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}, 
            lat: 0,
            lng: 0, 
            name: '',
        }
        // this.onMarkerClick = this.onMarkerClick.bind(this);
        // this.onClose = this.onClose.bind(this);
        // this.initDraggableCircle = this.initDraggableCircle.bind(this);
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
                name: data[0].name,
                lat: data[0].lat,
                lng: data[0].lng
            })
            console.log(this.state);
        })
    }

    // onMarkerClick (props, marker, e){
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true        
    //     });

    // } 
        
    // onClose (props) {
    //     if(this.state.showingInfoWindow) {
    //         this.setState({
    //             showingInfoWindow: false,
    //             activeMarker: null
    //         });
    //     }
    // }

    // initDraggableCircle({ map, maps }) {
    //     let circle = new maps.Circle({
    //       strokeColor: '#6D3099',
    //       strokeOpacity: 0.7,
    //       strokeWeight: 1,
    //       fillColor: '#B650FF',
    //       fillOpacity: 0.35,
    //       map: map,
    //       center: new google.maps.LatLng(...this.props.mapConfig.center),
    //       radius: this.props.mapConfig.radius * 1000,
    //       draggable: true
    //     });
    //     maps.event.addListener(circle, 'drag', this.onCircleDragged);
    //   }
      render() {
        console.log("adasdasd", this.state);
            let lat = this.state.lat;
            let lng = this.state.lng;

        const triangleCoords = [
          {lat: lat, lng: lng},
          {lat: lat - .01, lng: lng + .01},
          {lat: lat + .01, lng: lng + .01},
          {lat: lat, lng: lng}
        ];
       
        // {lat: 25.774, lng: -80.190},
        // {lat: 18.466, lng: -66.118},
        // {lat: 32.321, lng: -64.757},
        // {lat: 25.774, lng: -80.190}
        return(
          <Map google={this.props.google} className = "map"
              className={'map'}
              style = {mapStyles}
                center={{
                        lat: lat,
                        lng: lng, 
                }}
              zoom={14}>
              <Polygon
                paths={triangleCoords}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35} />
          </Map>
        )
      }
    
    // render() {
    //     console.log("adasdasd", this.state);
    //     let lat = this.state.lat;
    //     let lng = this.state.lng;
    //     const coords = { lat: lat, lng: lng };
    // const triangleCoords = [
    //     {lat: 25.774, lng: -80.190},
    //     {lat: 18.466, lng: -66.118},
    //     {lat: 32.321, lng: -64.757},
    //     {lat: 25.774, lng: -80.190}
    //   ];
    //     return (
    //         <div> 
    //             <Map 
    //                 className = {'map'}
    //                 google={this.props.google} 
    //                 zoom = {14}
    //                 style = {mapStyles}
    //                 center={{
    //                     lat: lat,
    //                     lng: lng, 
    //                     // position: 'relative'
    //                 }}
    //                 onGoogleApiLoaded={this.initDraggableCircle}

    //                 // onGoogleApiLoaded={({map, maps}) =>
    //                 // new google.maps.Circle({
    //                 // strokeColor: '#FF0000',
    //                 // strokeOpacity: 0.8,
    //                 // strokeWeight: 2,
    //                 // fillColor: '#FF0000',
    //                 // fillOpacity: 0.3,
    //                 // map,
    //                 // center: {coords},
    //                 // radius: 275,
    //                 // })}
    //                 // layerTypes={['TransitLayer']}
    //             >
    //             <Marker 
    //                 position = {{lat: lat, lng: lng}} 
    //                 onClick = {this.onMarkerClick}
    //                 name = {this.state.name
    //             }/>
    //              {/* <Circle
    //                 radius={1200}
    //                 center={coords}
    //                 onMouseover={() => console.log('mouseover')}
    //                 onClick={() => console.log('click')}
    //                 onMouseout={() => console.log('mouseout')}
    //                 strokeColor='transparent'
    //                 strokeOpacity={1}
    //                 strokeWeight={5}
    //                 fillColor='#FF0000'
    //                 fillOpacity={0.7}
    //                 style = {mapStyles}
    //             /> */}
                
    //             <InfoWindow
    //                 marker = {this.state.activeMarker}
    //                 visible = {this.state.showingInfoWindow}
    //                 onclose = {this.onClose}
    //             >
    //                 <div style = {divStyle}>
    //                     <h4>{this.state.selectedPlace.name}</h4>
    //                 </div>
    //             </InfoWindow>
    //             </Map>
    //             <div>Exact location information is provided after a booking is confirmed.</div>

    //         </div>
    //     )
    // }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBqt3OYrRJ-JRvZHID3x-9r2hQCijDFebk'
})(MapContainer);