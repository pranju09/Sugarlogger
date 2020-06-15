import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card';
import LineChart from '../../components/LineChart';
import SelectInput from '../../components/SelectInput';
import revenueData from '../../utils/revenue';

const options = [{ label: 'Apr 2019', value: 2019 }, { label: 'Apr 2018', value: 2018 }, { label: 'Apr 2017', value: 2017 }];
class RevenueComparision extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
      selectedYear: { label: 'Apr 2019', value: 2019 },
      revenueData: revenueData.data,
      labels: revenueData.labels,
      currentYear: {
        label: 'Apr 2020',
        year: 2020,
        data: [3, 12, 18, 26, 40],
        fill: false,
        borderColor: '#d34537',
        pointBackgroundColor: '#d34537',
        lineTension: 0.5,
        pointRadius: 4,
        borderWidth: 2,
      },
    };
  }

  componentDidMount() {
    this.getRevenueData();
  }

  getRevenueData = () => {
    let selectedYear = this.state.selectedYear,
      revenueData = [...this.state.revenueData];
    let data = revenueData.filter((data, ind) => (data.year === selectedYear.value ? data : false));
    this.setState({ data: [...data, this.state.currentYear] });
  };

  renderGraph = () => {
    const { data, labels } = this.state;
    if (data && data.length) {
      return <LineChart data={{ labels: labels, datasets: data }}></LineChart>;
    }
  };
  render() {
    return (
      <Card className="graph-card">
        <CardHeader>
          <div className="graph-card-left">
            <h4 className="graph-card-title pt-6">Revenue Comparison</h4>
          </div>
          <div className="graph-card-right">
            <span className="pt-6">Compare with :</span>
            <SelectInput
              options={options}
              value={this.state.selectedYear}
              onChange={value => this.setState({ selectedYear: value }, () => this.getRevenueData())}
            ></SelectInput>
          </div>
        </CardHeader>
        <CardBody>
          <div className="graph-div">{this.renderGraph()}</div>
        </CardBody>
        <CardFooter>
          <span className="switch-table">Show tables</span>
        </CardFooter>
      </Card>
    );
  }
}

export default RevenueComparision;
