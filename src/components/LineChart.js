import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <Line
          data={this.props.data}
          options={{
            title: {
              display: true,
              text: '',
              fontSize: 15,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
            scaleShowVerticalLines: false,
            scales: {
              left: 20,
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 5,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    stepSize: 10,
                    padding: 30,
                  },
                  gridLines: {
                    drawBorder: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
