import React, { Component } from 'react';
import ContactInfo from './ContentInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectKey: -1,
      keyword: '',
      contactData: [
        {
          name: 'Gildong',
          phone: '010-0000-0001',
        },
        {
          name: 'Cheolsu',
          phone: '010-0000-0002',
        },
        {
          name: 'Younghee',
          phone: '010-0000-0003',
        },
        {
          name: 'Maenggoo',
          phone: '010-0000-0004',
        },
        {
          name: 'Young',
          phone: '010-0000-0005',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this); // 데이터 추가
    this.handleRemove = this.handleRemove.bind(this); // 데이터 제거
    this.handleEdit = this.handleEdit.bind(this); // 데이터 변경
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleClick(key) {
    this.setState({
      selectKey: key,
    });

    console.log(key, 'is selected');
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] }),
    });
  }

  handleRemove() {
    // 파라미터를 갖지 않고 selectKey를 삭제할 때 쓰임

    if (this.state.selectKey < 0) {
      // 선택하지 않았을 때 아무런 기능 X. 즉 선택된 애만 삭제하도록
      return;
    }

    this.setState({
      contactData: update(this.state.contactData, { $splice: [[this.state.selectKey, 1]] }),
      selectKey: -1,
      // selectKey 를 -1로 만들어서 무효화
    });
  }

  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectKey]: {
          name: { $set: name },
          phone: { $set: phone },
        },
      }),
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      // 검색 기능
      data = data.filter((contact) => {
        // 해당 키워드가 있는 애들만 보이게
        return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
      });
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} onClick={() => this.handleClick(i)} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input name='keyword' placeholder='Search' onChange={this.handleChange}></input>
        <div>{mapToComponents(this.state.contactData)}</div>
        {/*  선택이 되면 -1 이 아니므로 true를 리턴하여 selected 가 뜨도록 함 */}
        <ContactDetails
          isSelected={this.state.selectKey != -1}
          contact={this.state.contactData[this.state.selectKey]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate} />
      </div>
    );
  }
}
