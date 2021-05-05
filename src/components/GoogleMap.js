import React, { Component } from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map 
            google={this.props.google}
            onClick={this.onMapClicked}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCTwzrLOo2U-H3YjhV4uCFOu3YOIE6-GVU')
  })(MapContainer)