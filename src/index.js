import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='calculator'>
        <Display/>
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='display'></div>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <button></button>
    )
  }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'))
