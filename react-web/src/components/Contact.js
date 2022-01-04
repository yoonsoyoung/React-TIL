import React, { Component } from 'react';
import ContactInfo from './ContentInfo';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
