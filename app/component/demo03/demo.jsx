import React from 'react';

let r = null;

class Demo3 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      time0: null,
      time1: new Date().toLocaleDateString().replace(/\//g, '-')
    };
  }

  componentDidMount () {
    this.setState({time0: this.props.now});
    r = setInterval(() => {
      this.setState((prev) => {
        return prev.time0 += 50
      });
    }, 50);
  }

  componentWillUnmount () {
    clearInterval(r);
  }

  render () {
    return (
      <div>
        {this.state.time1}&emsp;
        {this.state.time0}
      </div>
    );
  }
}

export default Demo3;
