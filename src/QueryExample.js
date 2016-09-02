import React, { Component } from 'react';

export default class QueryExample extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Dis is example for query params? <br />
        The test query param is: {this.props.location.query.test}
      </div>
    );
  }
}
