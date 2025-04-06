import React from 'react'
import './allusers.css';
import userData from '../../data/usersdata';
import Card from '../../components/card/Card';

function AllUsers() {
  return (
    <div className='container'>
        <center>
            <h1>All users</h1>
        </center>
        <hr />
       <div className="row">
       {
            userData.map((item, index)=>(
              <div className="col-md-6">
                 <Card data={item}/>
              </div>
            ))
        }
       </div>
    </div>
  )
}

export default AllUsers