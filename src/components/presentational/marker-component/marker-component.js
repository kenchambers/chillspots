import React, { Component } from 'react';
import { Marker } from 'react-map-gl';

class MarkerComponent extends Component {
  state = {
    hovered: false
  };

  markerClicked = e => {
    this.props.markerClicked(this.props.location);
  };

  render() {
    const { id, coordinates } = this.props.location.details;

    return (
      <Marker
        key={id}
        latitude={coordinates.latitude}
        longitude={coordinates.longitude}>
        {this.props.markerSelected || this.state.hovered ? (
          <img
            alt="selected-marker"
            className="hvr-wobble-vertical"
            onClick={this.markerClicked}
            src={require('../../../assets/icons/selected-marker.svg')}
          />
        ) : (
          <img
            alt="non-selected-marker"
            className="hvr-wobble-vertical"
            onClick={this.markerClicked}
            src={require('../../../assets/icons/marker.svg')}
          />
        )}
      </Marker>
    );
  }
}

export default MarkerComponent;
