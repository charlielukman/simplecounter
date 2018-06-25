import React, { Component } from 'react';
import AddCounter from './containers/add_counter';
import CounterList from './containers/counter_list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterList />
        <AddCounter />
      </div>
    );
  }
}

export default App;
