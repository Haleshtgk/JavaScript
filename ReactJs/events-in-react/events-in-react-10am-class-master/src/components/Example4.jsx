import React, { useState } from 'react'
import { calculate, displayAlert, total } from '../logic/AllLogic'

function Example4() {
    const [total, setTotal] = useState(0);
  return (
    <div className='container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-md-8 m-auto">
                <div className="border p-3 shadow">
                    <h1 className="fs-5">Creating any variables and functions anything outside of the component and exporting there and if we want to use we can import in any file or components.</h1>
                    <hr />
                    <div className="alert alert-success">
                        <h1 className="fs-5 alert-heading">Outside state value that is total state value = {total} </h1>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-success" onClick={()=>{
                            setTotal(calculate(1, 2, 3,4))
                        }}>Call calculate function</button>

                        <button className="btn btn-danger" onClick={()=>{
                            setTotal(0);
                        }}>Reset Count</button>

                        <button className="btn-primary btn" onClick={displayAlert}>Display alert message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example4