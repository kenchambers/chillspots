import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class ResultsMap extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: parseFloat(props.match.params.lat),
        longitude: parseFloat(props.match.params.lng),
        zoom: 8
      }
    };
  }

  render() {
    const { lat, lng } = this.props.match.params;
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}

export default ResultsMap;
