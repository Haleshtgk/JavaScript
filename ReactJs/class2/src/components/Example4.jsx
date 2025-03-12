import React from 'react'

function Example4(props) {
    //storing props values inside the local variables
    var username = props.username;
    var age = props.age;
    var isAdmin = props.isAdmin;

    console.log(username);
    console.log(age);
    console.log(isAdmin);
    
  return (
    <div>
        <h1>This is the example4 component with properties (props)</h1>
        <p>if we pass any props from that parent to child props will be in object properties</p>
        <hr />
        <div className="row">
            <div className="col-md-3">
                <div className="card p-3">
                    <ul className="list-group">
                        <li className="list-group-item"><b>Username: </b> {props.username}</li>
                        <li className="list-group-item"><b>Age: </b> {props.age}</li>
                        <li className="list-group-item"><b>isAdmin?: </b> {props.isAdmin == true?(<span className='text-success'>Yes This user is Admin</span>):(<span className='text-danger'>No this user is not Admin</span>)}</li>
                        <li className="list-group-item"><b>Email: </b> {props.email}</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example4