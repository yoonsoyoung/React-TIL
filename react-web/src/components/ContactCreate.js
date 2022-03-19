import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value; // input의 name이(name 또는 phone) 수정된 애가 들어가게 됨
    this.setState(nextState);
  }

  handleClick() {
    // 이 객체는 한 번 만들어지고 수정될 일이 없기 때문에 상수형으로 선언
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
    };

    this.props.onCreate(contact);

    // input 초기화
    this.setState({
      name: '',
      phone: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='phone'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

// prop 받는게 func 함수형이다
// React v15.5부터 React.PropTypes 대신 prop-types 라이브러리 설치하여 import 사용.
ContactCreate.propTypes = {
  onCreate: PropTypes.func,
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.error('onCreate not defined');
  },
};
