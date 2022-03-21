import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      name: '',
      phone: '',
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleToggle() {
    // eidt을 눌렀을 때 폼에 기존 값이 뜨도록
    if (!this.state.isEdit) {
      // 기존 eidt상태가 false일 때 eidt모드로 바뀌니까
      this.setState({
        // 현재 상태를 바꿈
        name: this.props.contact.name,
        phone: this.props.contact.phone,
      });
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit,
    });

    // setState는 비동기. setState가 끝나기 전에 console 이 실행되기 때문에 클릭 시 false에서 true 바뀐 출력이 아닌 false를 먼저 출력
    // console.log(this.state.isEdit);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit() {
    // state를 그대로 전달할거라 파라미터 필요 없음
    // props로 받은 onEdit을 실행
    this.props.onEdit(this.state.name, this.state.phone);
  }

  render() {
    // 자세한 정보
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    // 수정 input
    const edit = (
      <div>
        <p>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type='text'
            name='phone'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );

    // 수정 폼이 보일지 정보가 보일지
    const view = this.state.isEdit ? edit : details;

    // 미선택 시
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <p>
          <button onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'Edit'}</button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
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
  onEdit: () => {
    console.error('onEdit not defined');
  },
};

ContactDetails.propTypes = {
  contact: PropTypes.object,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
