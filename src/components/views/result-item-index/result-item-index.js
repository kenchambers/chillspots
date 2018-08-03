import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResultsList from '../../containers/results-list';
import ResultItemDetail from '../../containers/result-item-detail/result-item-detail';
import {
  fetchChillSpots,
  fetchChillSpotDetails
} from '../../../actions/chill-spots-actions';

import './result-item-index.css';
class ResultItemIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const name = this.props.match.params.name;

    this.props.fetchChillSpotDetails(name);
  }
  render() {
    return (
      <div
        id="result-item-index-container"
        style={{ border: '2px solid green', height: '100vh', width: '100vw' }}
        className="container">
        <div className="row">
          <div className="col">
            <ResultItemDetail />
          </div>
          <div className="col">
            <ResultsList {...this.props} />
          </div>
        </div>
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
    fetchChillSpots,
    fetchChillSpotDetails
  }
)(withRouter(ResultItemIndex));
