import React from 'react';
import Demo1 from './demo01/demo'
import Demo2 from './demo02/demo'
import Demo3 from './demo03/demo'
import Demo4 from './demo04/demo'

class Index extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      seconds: 0
    }
  }

  tick () {
    this.setState (prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount () {
    this.interval = setInterval (() => this.tick (), 1000);
  }

  componentWillUnmount () {
    clearInterval (this.interval);
  }

  render () {
    return (
      <div>
        This is the Index page
        Seconds: {this.state.seconds}
        <br /><br />
        <Demo1 />
        <br /><br />
        <Demo2 />
        <br /><br />
        <Demo3 now={Date.now()}/>
        <br /><br />
        <Demo4 />
      </div>
    );
  }
}

export default Index;
