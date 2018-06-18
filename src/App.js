import React, { Component } from 'react';
import './App.css';
import LocoList from './data/LocoList';
import SingleEngine from './SingleEngine';
import Engines from './Engines';

class App extends Component {
  state = {
    LocoList,
    engine: {
      name: "",
    }
  };
  render() {
    console.log(this.state.engine.name, "engine");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Early locomotives</h1>
          {/* <SearchBox
            handleChange={this.handleChange}
            engines={this.state.LocoList}
          /> */}
        </header>
        {this.state.engine.name ? <SingleEngine engine={this.state.engine}/> :  <Engines engines={this.state.LocoList} />}
      </div>
    );
  }
 
  handleChange = ({ target: { value } }) => {
    const newEngine = value;
    const filteredLocos = LocoList.filter(({ name }) => {
      return name === newEngine;
    });
    this.setState({
      engine: filteredLocos[0]
    });
  };
}

export default App;
