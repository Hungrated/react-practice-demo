import React from 'react';

function Welcome(props) {
  return (
    <h1>welcome, {props.name}</h1>
  )
}

class Demo2 extends React.Component {
  render () {
    return (
      <div>
        <Welcome name={'Zzh'}/>
        <Welcome name={'Zzh2'}/>
        <Welcome name={'Zzh3'}/>
        <Welcome name={'Zzh4'}/>
      </div>
    );
  }
}

export default Demo2;
