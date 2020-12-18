import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import Breakpoints from './breakpoints.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 1
    }
  }

  increment(howMuch) {
    this.setState({counter: this.state.counter + howMuch});
  }

  render() {
    return <div>
      <div>The current value is <b>{this.state.counter}</b></div>
      <Button 
        color="primary"
        onClick={ () => this.increment(1) }
        >Increment</Button>
      <Button 
        color="primary"
        onClick={ () => this.increment(-1) }
        >Decrement</Button>
      <Breakpoints/>
    </div>
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
  