import React from 'react';

let r = null;

class Demo3 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      time0: null
    };
  }

  componentDidMount () {
    this.state.time0 = this.props.now;
    r = setInterval(() => {
      this.state.time0 = Date.now();
    }, 2000);
  }

  componentWillUnmount () {
    r = clearInterval(r);
  }

  render () {
    return (
      <div>
        {this.state.time0}
      </div>
    );
  }
}

export default Demo3;
