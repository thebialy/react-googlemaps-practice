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
        <Map google={this.props.google}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-hI')
  })(MapContainer)