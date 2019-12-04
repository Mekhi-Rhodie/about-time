import React, { Component } from 'react';
import Timer from "./components/timer";
import Lap from "./components/lap";
import LapTime from "./components/lap_time";
import Stopwatch from "./components/stopwatch";


import { Stopwatch } from './stopwatch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;