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
    this.setState({time0: this.props.now});
    r = setInterval(() => {
      this.setState({time0: Date.now()});
    }, 50);
  }

  componentWillUnmount () {
    clearInterval(r);
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
