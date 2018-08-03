import React, { Component } from 'react';
import SearchComponent from '../containers/search-component';
export default class SearchIndex extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red' }} className="container">
        <div
          style={{ border: '1px solid red', height: '100vh' }}
          className="row align-items-center">
          <div style={{ border: '1px solid red' }} className="col" />
          <div style={{ border: '1px solid red' }} className="col">
            <div style={{ border: '1px solid red' }} className="center-block">
              <h1 className="text-center">ChillSpots</h1>
              <h4 className="text-center">
                Find Chill spots (with wifi) to study or work near you
              </h4>
              <SearchComponent />
            </div>
          </div>
          <div style={{ border: '1px solid red' }} className="col" />
        </div>
      </div>
    );
  }
}
