import React, { Component } from 'react';
import SearchInput from '../../components/SearchInput';
import data from '../../utils/dummy.json';
import List from './List';

export default class PatientsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...data.data],
    };
  }

  render() {
    return (
      <div>
        Search For Patients Data :{' '}
        <SearchInput
          data={this.state.list}
          keysToApplySearchOn={['name', 'mobile', 'referral', 'branch']}
          renderComponent={data => <List filteredData={data}></List>}
        ></SearchInput>
      </div>
    );
  }
}
