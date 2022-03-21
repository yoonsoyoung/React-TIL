import React, { Component } from 'react';

export default class ContactDetails extends Component {
  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = <div>Not Selected</div>;
    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );
  }
}

// 선택을 하지 않았을 때는 undefined를 전달하며 에러가 나서 기본값을 설정해줌
ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
  onRemove: () => {
    // 지정되지 않았을 때 에러 반환
    console.error('onRmove not defined');
  },
};
