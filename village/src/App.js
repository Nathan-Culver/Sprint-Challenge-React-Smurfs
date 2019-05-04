import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import Axios from 'axios';
import { Route } from 'react-router-dom';

const baseURL = 'http://localhost:3333';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    Axios.get(baseURL + '/smurfs')
    .then(response => this.setState({smurfs : response.data }))
    .catch(err => console.log(err));
  }

  getSmurfs(data){
    this.setState({
      smurfs : data
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Smurfs smurfs={this.state.smurfs} />	        <Route path="/smurfForm" render={() => <SmurfForm getSmurfs={this.getSmurfs} />} />
      </div>
    );
  }
}

export default App;
