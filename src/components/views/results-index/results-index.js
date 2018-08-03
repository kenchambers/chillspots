import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './results-index.css';
import { fetchChillSpots } from '../../../actions/chill-spots-actions';
import ResultsMap from '../../presentational/results-map';
import ResultsList from '../../containers/results-list';
class ResultsIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { lat, lng } = this.props.match.params;
    this.props.fetchChillSpots({ lat, lng });
  }
  render() {
    return (
      <div
        id="results-index-container"
        style={{ border: '1px solid red' }}
        className="container">
        <div className="row">
          <div id="results-map" className="col">
            <ResultsMap {...this.props} />
          </div>
          <div id="results-list" className="col">
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
    fetchChillSpots
  }
)(withRouter(ResultsIndex));
