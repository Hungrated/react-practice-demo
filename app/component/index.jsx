import React from 'react';
import Demo1 from './demo01/demo'

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
      </div>
    );
  }
}

export default Index;
