import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../containers/Dashboard/Dashboard';
import PatientsContainer from './Patients/PatientsContainer';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>Welcome to Sugarlogger</h3>
        <div className="row">
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8">
            <Route path="/patients" component={PatientsContainer}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
          </div>
        </div>
      </div>
    );
  }
}
