import React from 'react'
import { displayAlert } from '../logic/AllLogic'

function Example3() {

    const displayAlert1 = () =>{
        alert("this is the first alert message from dislay alert function")
    }
    const displayAlertsecond = () =>{
        alert("this is the second alert message from displayAlertSecond function")
    }
  return (
    <div className='container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="border shadow p-3">
                <p className='fs-4'><b>3) Call multiple functions in an onClick event handler</b></p>

              <div className="d-flex gap-3">
              <button className="btn btn-success" onClick={()=>{
                    displayAlert1();
                    displayAlertsecond();
                    alert("this is the third alert message")
                }}>Call multiple functions</button>

                <button className="btn btn-primary" onClick={displayAlert}>Display external alert message</button>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example3