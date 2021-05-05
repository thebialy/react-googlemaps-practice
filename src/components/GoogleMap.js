import React, { Component } from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
          address: 'Franklin, TN'
      }
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
                address: this.state.mapCenter.address
            }}
        >
            <Marker 
                position = {{
                    address: this.state.mapCenter.address
                }}
            />
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCTwzrLOo2U-H3YjhV4uCFOu3YOIE6-GVU')
  })(MapContainer)