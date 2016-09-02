import React, { Component } from 'react';

export default class FourOhFour extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/")
    }, 3000);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Page cannot be found
        <br />
        <img src="https://www.fillmurray.com/600/600" alt="404" />
      </div>
    );
  }
}
