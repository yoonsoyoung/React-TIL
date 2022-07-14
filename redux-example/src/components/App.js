import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const propTypes = {

};

const defaultProps = {

};

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter />

      </div>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
