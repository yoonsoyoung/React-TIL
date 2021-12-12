import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject />
      </div>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

export default App;
