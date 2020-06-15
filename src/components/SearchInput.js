import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../scss/components/SearchInput.scss';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      list: [...props.data],
    };
  }

  handleSearch = e => {
    this.setState({ query: e.target.value }, () => this.getFilteredData());
  };

  getFilteredData = () => {
    var list = [],
      currentList = [...this.props.data];
    if (this.state.query !== '') {
      list = currentList.filter(val => {
        let searchVal = this.state.query.trim().toLowerCase(),
          count = 0;

        for (let key of this.props.keysToApplySearchOn) {
          if (val[key]) {
            count =
              val[key]
                .trim()
                .toLowerCase()
                .indexOf(searchVal) !== -1
                ? count + 1
                : count;
          }
        }
        return count >= 1 ? { ...val } : false;
      });
    } else {
      list = currentList;
    }
    this.setState({ list });
  };

  render() {
    const { list, query } = this.state;
    return (
      <Fragment>
        <div className="search-input">
          <input type="text" placeholder="Search" onChange={this.handleSearch} value={query}></input>
          <span className="search-icon">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        {this.props.renderComponent(list)}
      </Fragment>
    );
  }
}

SearchInput.propTypes = {
  data: PropTypes.array,
  keysToApplySearchOn: PropTypes.array,
  renderComponent: PropTypes.func,
};
