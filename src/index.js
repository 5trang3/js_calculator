import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>'Test'</div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'))
