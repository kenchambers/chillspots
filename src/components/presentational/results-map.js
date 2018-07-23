import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ResultsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: parseFloat(props.match.params.lat),
        longitude: parseFloat(props.match.params.lng),
        zoom: 10
      }
    };
  }

  render() {
    const { lat, lng } = this.props.match.params;

    const results = this.props.businesses
      ? this.props.businesses.businesses
      : false;

    console.log(results);

    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}>
          {results &&
            results.map(business => {
              let latitude = business.coordinates.latitude;
              let longitude = business.coordinates.longitude;
              return (
                <Marker
                  key={business.id}
                  latitude={latitude}
                  longitude={longitude}
                  offsetLeft={-20}
                  offsetTop={-10}>
                  <div>
                    <img src={require('../../assets/marker.svg')} />
                  </div>
                </Marker>
              );
            })}
        </ReactMapGL>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    businesses: state.chillspots.results
  };
}
export default connect(
  mapStateToProps,
  {}
)(withRouter(ResultsMap));
