import React, { Component } from 'react';
class Subject extends Component {
  render() {
    console.log('Subject render');
    return (
      <header>
        <h1>
          <a
            href='/'
            onClick={function (e) {
              e.preventDefault(); // 링크 클릭 시 페이지 전환 막음
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
