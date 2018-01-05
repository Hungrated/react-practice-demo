import React from 'react';

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
      </div>
    );
  }
}

export default Index;