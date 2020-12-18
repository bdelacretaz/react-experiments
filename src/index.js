import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import Breakpoints from './breakpoints.js';

const content = []
for(var i=1 ; i < 20; i++) {
  content.push({
    title:`item #${i}`,
    text: `this is the text of item #${i}`,
  })
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }
  }

  render() {
    if(this.state.detail) {
      return <div onClick={ () => this.setState({ detail : !this.state.detail})} >
        <b>
          <div>{this.props.title}</div>
        </b>
        <div>{this.props.text}</div>
      </div>
    } else {
      return <div
        onClick={ () => this.setState({ detail : !this.state.detail})}>
        {this.props.title}
      </div>
    }
  }

}

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
      <Breakpoints>
        {content.map(c => <Item title={c.title} text={c.text}/>)}
      </Breakpoints>
    </div>
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
  