import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { finduser } from '../database/userData';

function Details() {
    const {index} = useParams();
    const [user, setuser] = useState(finduser(index))
  return (
    <div className='container p-3 p-md-5'>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="p-3 border shadow-sm">
                        <h1 className="fs-4">User details</h1>
                        <hr />
                        <p className="fs-5"><b>Email address: </b> {user.email}</p>
                        <p className="fs-5"><b>Phone number: </b> {user.phone}</p>
                        <br />

                     <div className="d-flex gap-3 flex-wrap">
                     <a href="/" className='btn btn-primary'>Dashboard</a>
                     <a href={`/edit/${index}`} className='btn btn-success'>Edit user</a>
                     </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Details