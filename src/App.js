import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // ui에 영향을 주지 않기 때문에 state로 하지 X
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      welcome: { title: 'Welcome', desc: 'Hello React!!!' },
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design.' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.' },
      ],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content._title} desc={_content._desc} />;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id++;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
            });
            console.log(_title, _desc);
          }.bind(this)}
        />
      );
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_title, _desc) {
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
            });
            console.log(_title, _desc);
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    console.log('App render');

    // console.log('render', this);
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: 'read', selected_content_id: Number(id) });
          }.bind(this)}
        />
        <Control
          onChangeMode={function (mode) {
            this.setState({ mode: mode });
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
