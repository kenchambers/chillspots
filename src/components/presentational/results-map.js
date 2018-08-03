import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectMapLocation } from '../../actions/map-state-actions';
import LoaderCircle from '../../utils/loader-circle/loader-circle';
import MarkerComponent from '../presentational/marker-component/marker-component';

class ResultsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: this.props.width ? this.props.width : 400,
        height: this.props.height ? this.props.height : 400,
        latitude: parseFloat(props.match.params.lat),
        longitude: parseFloat(props.match.params.lng),
        zoom: this.props.zoom ? this.props.zoom : 12
      }
    };
  }

  markerClicked = chillspot => {
    this.props.history.push(
      `/results/${chillspot.info.coordinates.latitude}/${
        chillspot.info.coordinates.longitude
      }/${chillspot.info.alias}`
    );
  };

  render() {
    return (
      <div>
        {this.props.chillspots ? (
          <div>
            <ReactMapGL
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
              {...this.state.viewport}
              onViewportChange={viewport => this.setState({ viewport })}>
              {this.props.chillspots.length > 0 &&
                this.props.chillspots.map((location, i) => {
                  return (
                    <MarkerComponent
                      {...this.props}
                      markerSelected={
                        location.info.id === this.props.mapState.id
                      }
                      markerClicked={this.markerClicked}
                      key={location.info.id}
                      location={location}
                    />
                  );
                })}
            </ReactMapGL>
          </div>
        ) : (
          <div style={{ width: '100vw' }}>
            <LoaderCircle />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    chillspots: state.chillspots,
    mapState: state.mapState
  };
}
export default connect(
  mapStateToProps,
  { selectMapLocation }
)(withRouter(ResultsMap));
