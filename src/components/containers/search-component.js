import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserLocation } from '../../actions/user-actions';
import { withRouter } from 'react-router-dom';

class SearchComponent extends Component {
  state = {
    lat: null,
    lng: null
  };
  success = position => {
    this.props.fetchUserLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });

    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });

    this.props.history.push(
      `/results/${position.coords.latitude}/${position.coords.longitude}`
    );
  };
  error = error_message => {
    console.log(
      'An error has occured while retrieving location',
      error_message
    );
  };
  findUsersLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    } else {
      // geolocation is not supported
      // get your location some other way
      alert('geolocation is not enabled on this browser');
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.findUsersLocation} className="btn btn-primary">
          Use My Location
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    chillspots: state.chillspots
  };
}

export default connect(
  mapStateToProps,
  {
    fetchUserLocation
  }
)(withRouter(SearchComponent));
