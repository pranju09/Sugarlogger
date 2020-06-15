import React, { Component } from 'react';
import RevenueComparision from './RevenueComparision';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="gray-backgrond">
        <RevenueComparision></RevenueComparision>
      </div>
    );
  }
}
