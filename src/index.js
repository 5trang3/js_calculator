import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let buttonInfo = [
  {
    'name' : 7,
    'id' : 'seven'
  },
  {
    'name' : 8,
    'id' : 'eight'
  },
  {
    'name' : 9,
    'id' : 'nine'
  },
  {
    'name' : '+',
    'id' : 'add'
  },
  {
    'name' : 'AC',
    'id' : 'clear'
  },
  {
    'name' : 4,
    'id' : 'four'
  },
  {
    'name' : 5,
    'id' : 'five'
  },
  {
    'name' : 6,
    'id' : 'six'
  },
  {
    'name' : '-',
    'id' : 'subtract'
  },
  {
    'name' : 1,
    'id' : 'one'
  },
  {
    'name' : 2,
    'id' : 'two'
  },
  {
    'name' : 3,
    'id' : 'three'
  },
  {
    'name' : '/',
    'id' : 'divide'
  },
  {
    'name' : '=',
    'id' : 'equals'
  },
  {
    'name' : '.',
    'id' : 'decimal'
  },
  {
    'name' : 0,
    'id' : 'zero'
  },
  {
    'name' : 'x',
    'id' : 'multiply'
  },
]

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs : [],
      display : 0
    }
  }
  onNumberClick(num) {
    const inputsLength = this.state.inputs.length;
    if (inputsLength == 0) {
      this.setState({
        inputs : [num],
        display : num
      })
    }
  }
  render() {
    let buttons = [];
    for (let i = 0; i < this.props.buttonInfo.length; i++) {
      buttons.push(
        <Button id = {this.props.buttonInfo[i]['id']} name = {this.props.buttonInfo[i]['name']}/>
      )
    }
    return (
      <div id='calculator'>
        <Display display={this.state.display}/>
        {buttons}
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
      <div id='display'>{this.props.display}</div>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <button id={this.props.id}>{this.props.name}</button>
    )
  }
}

ReactDOM.render(<Calculator buttonInfo={buttonInfo}/>, document.getElementById('root'))
