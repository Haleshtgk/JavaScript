import React, { useState } from 'react'
import { createnewuser, finduser, updateUser } from '../database/userData';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const {index} = useParams()
    const [formEmail, setFormEmail] = useState(finduser(index).email);
    const [formPhone, setFormPhone] = useState(finduser(index).phone);

    //to navigate from one page to another in js functions use the useNavigate
    const navigate = useNavigate();

    const submitHandler = ()=>{
        updateUser(index, formEmail, formPhone);
        navigate('/'); //redirecting to dashboard page
    }

  return (
    <div className='container p-3 p-md-5'>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="border p-3 shadow border-primary">
                    <h1 className="fs-4">Update user data</h1>
                    <hr />
                    <form onSubmit={submitHandler}>
                        <div className="form-group mt-3">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="email" placeholder='Email address' className="form-control" value={formEmail} onChange={(e)=>setFormEmail(e.target.value)}/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="tel" placeholder='+91 000-0000-000' className="form-control" value={formPhone} onChange={(e)=>setFormPhone(e.target.value)} />
                        </div>
                        <br />
                       <div className="d-flex gap-2 flex-wrap">
                       <button type='submit' className="btn btn-primary px-5">Update</button>
                       <button type='reset' className="btn btn-danger">Cancel</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit