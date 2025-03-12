import React, { Component } from 'react'

export class SayHi extends Component {
     // Default props can be defined in the constructor or as a static property
     static defaultProps = {
        username:"John",
        email:"john@gmail.com",
        age:34,
        profile:"https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
        grade:"A+"
     }
  render() {

    //destructuring the props that can be default props or other props from outside
    const {username, age, email, profile, grade} = this.props;
    return (
        <div className="card">
        <div className="card-header">
            <img src={profile} style={{width:'80px', height:'80px'}} alt=""  className='rounded-pill d-block m-auto'/>
        </div>
        <div className="card-body">
            <ul className="list-group">
                <li className="list-group-item"><b>username: </b> {username}</li>
                <li className="list-group-item"><b>Email: </b> {email}</li>
                <li className="list-group-item"><b>Age </b> {age}</li>
                <li className="list-group-item"><b>Grade: </b> {grade}</li>
            </ul>
        </div>
    </div>
    )
  }
}

export default SayHi