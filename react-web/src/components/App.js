import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div className='App'>
        <button
          onClick={() => {
            this.setState({ name: 'React' });
          }}
        >
          Click
        </button>
        <h1>Hello :) {this.state.name}</h1>
      </div>
    );
  }
}

export default hot(module)(App);
