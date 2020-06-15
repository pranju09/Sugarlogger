import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../scss/components/SelectInput.scss';

class SelectInput extends Component {
  render() {
    const { options, value, onChange, placeholder, className = '', disabled } = this.props;

    return (
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`select-input ${className}`}
        disabled={disabled || false}
        arrowRenderer={() => <i className="fa fa-chevron-down" />}
        searchable={true}
        clearable={false}
      />
    );
  }
}
export default SelectInput;
