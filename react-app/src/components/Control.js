import React, { Component } from 'react';
class Control extends Component {
  render() {
    return (
      <ul>
        <li className='btn'>
          <a
            href='/create'
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}
          >
            CREATE
          </a>
        </li>
        <li className='btn'>
          <a
            href='/update'
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}
          >
            UPDATE
          </a>
        </li>
        <li className='btn'>
          <input
            type='button'
            value='DELETE'
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;
