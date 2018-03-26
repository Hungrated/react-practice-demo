import React from 'react';

class Demo1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render () {
    return (
      <div>
        &emsp;{this.state.count}&emsp;
        <button onClick={() => this.setState({count: this.state.count + 1})}>iterate</button>
      </div>
    );
  }
}

export default Demo1;
