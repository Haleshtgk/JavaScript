import React from 'react'

function Example5(props) {
    const {username, email, age, phone, design} = props;
    //const {properties} = object
  return (
    <div className='container-fluid'>
        {/* <h1>Extracting all properties from the object</h1>
        <hr /> */}

        <div className="row">
            <div className="col-md-3">
                <div className={`card p-2 ${design} mb-3`}>
                    <ul className="list-group">
                        <li className="list-group-item"><b>Username:  </b> {username}</li>
                        <li className="list-group-item"><b>Email: </b>{email}</li>
                        <li className="list-group-item"><b>Age: </b>{age}</li>
                        <li className="list-group-item"><b>Phonenumber: </b>{phone}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Example5