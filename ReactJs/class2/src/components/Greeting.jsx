import React, { Component } from 'react'

export class Greeting extends Component {
  render() {
    const {name, age} = this.props;
    return (
      <div className='container-fluid p-3'>
        <div className="alert alert-success">
            <h4 className="fs-4 alert-title">Hello 👋, {name}</h4>
            <p className="fs-5 alert-subtitle">You are  {age} years od now! ⭐</p>
        </div>
      </div>
    )
  }
}

export default Greeting