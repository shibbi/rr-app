import React, { Component } from 'react';

export default class ProgramExample extends Component {

  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    var inputNode = this.refs.whatever
    var inputValue = inputNode.value

    this.props.history.push("/query?test=" + inputValue)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Program example</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input ref="whatever" placeholder="Input stuff here" />
          <button>Click me to route</button>
        </form>
      </div>
    );
  }
}
