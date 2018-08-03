import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultListItem from '../presentational/result-list-item/result-list-item';
import {
  selectMapLocation,
  hoverMapLocation
} from '../../actions/map-state-actions';
class ResultsList extends Component {
  selectMapLocation = chillspot => {
    this.props.selectMapLocation(chillspot);
  };

  resultListItemHovered = (bool, chillspot) => {
    if (bool) {
      this.props.hoverMapLocation(chillspot.info.id);
    } else {
      this.props.hoverMapLocation(null);
    }
  };

  clickListItem = chillspot => {
    this.props.history.push(
      `/results/${chillspot.info.coordinates.latitude}/${
        chillspot.info.coordinates.longitude
      }/${chillspot.info.alias}`
    );
  };

  render() {
    return (
      <ul>
        {this.props.chillspots.length > 0 &&
          this.props.chillspots.map(chillspot => {
            return (
              <li
                key={chillspot.info.id}
                onClick={e => this.selectMapLocation(chillspot)}>
                <ResultListItem
                  onClick={this.clickListItem}
                  resultListItemHovered={this.resultListItemHovered}
                  chillspot={chillspot}
                  clickListItem={this.clickListItem}
                />
              </li>
            );
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    chillspots: state.chillspots
  };
}

export default connect(
  mapStateToProps,
  { selectMapLocation, hoverMapLocation }
)(ResultsList);
