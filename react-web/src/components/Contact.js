import React, { Component } from 'react';
import ContactInfo from './ContentInfo';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value,
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
        return <ContactInfo contact={contact} key={i} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input name='keyword' placeholder='Search' onChange={this.handleChange}></input>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
