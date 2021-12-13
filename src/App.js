import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
    };
  }
  render() {
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
        <TOC />
        <Content title='HTML' desc='HTML is HyperText Markup Language.' />
      </div>
    );
  }
}

export default App;
