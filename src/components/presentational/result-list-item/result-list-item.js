import React, { Component } from 'react';
import './result-list-item.css';

class ResultListItem extends Component {
  render() {
    const business = this.props.chillspot;
    return (
      <div
        id="result-list-item-container"
        className="hvr-back-pulse"
        onMouseEnter={() => this.props.resultListItemHovered(true, business)}
        onMouseLeave={() => this.props.resultListItemHovered(false, business)}
        onClick={e => this.props.clickListItem(business)}
        style={{ border: '1px solid blue' }}>
        <div className="row">
          <div className="col">Title: {business.details.name}</div>
          <div className="col">
            Img:{' '}
            <img
              alt="business-icon"
              style={{ height: 40 }}
              src={business.info.image_url}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResultListItem;
