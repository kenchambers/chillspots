import React, { Component } from 'react';

import ResultsMap from '../../presentational/results-map';

class ResultItemDetail extends Component {
  render() {
    return (
      <div style={{ border: '2px solid green', height: '50vh', width: '50vw' }}>
        <ResultsMap height={175} width={175} zoom={14} />
      </div>
    );
  }
}
export default ResultItemDetail;
