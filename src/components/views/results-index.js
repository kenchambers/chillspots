import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchChillSpots } from '../../actions/chill-spots-actions';
import ResultsMap from '../presentational/results-map';

class ResultsIndex extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {
    const { lat, lng } = this.props.match.params;
    this.props.fetchChillSpots({ lat, lng });
  }
  render() {
    return (
      <div>
        <ResultsMap {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  chillspots: state.chillspots;
}

export default connect(
  mapStateToProps,
  {
    fetchChillSpots
  }
)(withRouter(ResultsIndex));
