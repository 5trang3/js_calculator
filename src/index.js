import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let buttonInfo = {
  7 : 'seven',
  8 : 'eight',
  9 : 'nine',
  '+' : 'add',
  'AC' : 'clear',
  4 : 'four',
  5 : 'five',
  6 : 'six',
  '-' : 'minus',
  1 : 'one',
  2 : 'two',
  3 : 'three',
  '/' : 'divide',
  '=' : 'equals',
  '.' : 'decimal',
  0 : 'zero',
  'x' : 'multiply'
}

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

ReactDOM.render(<Calculator buttonInfo={buttonInfo}/>, document.getElementById('root'))
