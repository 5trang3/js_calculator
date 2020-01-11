import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let buttonInfo = [
  {
    'name' : '7',
    'id' : 'seven'
  },
  {
    'name' : '8',
    'id' : 'eight'
  },
  {
    'name' : '9',
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
    'name' : '4',
    'id' : 'four'
  },
  {
    'name' : '5',
    'id' : 'five'
  },
  {
    'name' : '6',
    'id' : 'six'
  },
  {
    'name' : '-',
    'id' : 'subtract'
  },
  {
    'name' : '1',
    'id' : 'one'
  },
  {
    'name' : '2',
    'id' : 'two'
  },
  {
    'name' : '3',
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
    'name' : '0',
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
      inputs : []
    }
    this.getDisplay = this.getDisplay.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  getDisplay() {
    let display = 0;
    if (this.state.inputs.length !== 0) {
      display = this.state.inputs.join("")
    };
    return display
  }
  handleButtonClick(name) {
    const isNum = /[1-9]/;
    const isOperation = /[*+/]/;
    const inputsLength = this.state.inputs.length;
    const inputsEnd = this.state.inputs[inputsLength - 1];
    const inputsSecondEnd = this.state.inputs[inputsLength - 2];
    if (isNum.test(name)) {
      if (inputsLength === 0 || isOperation.test(inputsEnd)) {
        this.setState(state => ({
          inputs : [...this.state.inputs, name]
        }))
      }
      else if (isNum.test(inputsEnd) || inputsEnd === '.') {
        let newInputs = this.state.inputs.slice();
        newInputs[newInputs.length - 1] = inputsEnd + name;
        this.setState({
          inputs : newInputs
        })
      }
      else if (inputsEnd === '0') {
        let newInputs = this.state.inputs.slice();
        newInputs[newInputs.length - 1] = name;
        this.setState ({
          inputs : newInputs
        })
      }
      else {
        if (inputsLength === 1 || isOperation.test(inputsSecondEnd)) {
          let newInputs = this.state.inputs.slice();
          newInputs[newInputs.length - 1] = newInputs[newInputs.length - 1] + name;
          this.setState({
            inputs : newInputs
          })
        }
        else if (isNum.test(inputsSecondEnd) || inputsSecondEnd === '0') {
          this.setState(state => ({
            inputs : [...state.inputs, name]
          }))
        }
      }
    }
    else if (name === '.') {
      if (isNaN(inputsEnd) === false && inputsEnd.includes('.') === false) {
        let newInputs = this.state.inputs.slice();
        newInputs[newInputs.length - 1] += '.';
        this.setState(state => ({
          inputs: newInputs
        }))
      }
      else if (inputsLength === 0) {
        this.setState({
          inputs : [name]
        })
      }
    }
    else if (name === 'AC') {
      this.setState({
        inputs : []
      })
    }
    else if (name === '0') {
      if (inputsLength === 0 || isOperation.test(inputsEnd) || inputsEnd === '-') {
        this.setState(state =>({
          inputs : [...state.inputs, name]
        }))
      }
      else if ((isNaN(inputsEnd) === false && inputsEnd !== '0') || inputsEnd === '.') {
        let newInputs = this.state.inputs.slice();
        newInputs[newInputs.length - 1] += '0';
        this.setState({
          inputs : newInputs
        })
      }
    }
  }
  render() {
    let buttons = [];
    for (let i = 0; i < this.props.buttonInfo.length; i++) {
      buttons.push(
        <Button id = {this.props.buttonInfo[i]['id']} name = {this.props.buttonInfo[i]['name']} handleClick={this.handleButtonClick}/>
      )
    }
    return (
      <div id='calculator'>
        <Display display={this.getDisplay()}/>
        {buttons}
      </div>
    )
  }
}

class Display extends React.Component {
  render() {
    return (
      <div id='display'>{this.props.display}</div>
    )
  }
}

class Button extends React.Component {
  render() {
    return(
      <button id={this.props.id} onClick={() => this.props.handleClick(this.props.name)}>{this.props.name}</button>
    )
  }
}

ReactDOM.render(<Calculator buttonInfo={buttonInfo}/>, document.getElementById('root'))
