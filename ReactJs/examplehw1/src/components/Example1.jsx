import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" }
];

function Example1() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const login = (user) => {
        setCurrentUser(user);
        setLoggedIn(true);
    };

    const logout = () => {
        setCurrentUser(null);
        setLoggedIn(false);
    };

    return (
        <section className="container-fluid p-3 p-md-5 bg-light">
            <center className="bg-primary text-white p-3 rounded">
                <h1 className="fs-1">User Authentication App</h1>
            </center>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-3">
                        <h3 className="fs-3">Authentication</h3>
                        <hr />
                        {loggedIn ? (
                            <>
                                <h4 className="text-success">Welcome, {currentUser.name}!</h4>
                                <p className="fs-5">Role: {currentUser.role}</p>
                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <h5>Select a user to log in:</h5>
                                {users.map((user, index) => (
                                    <button key={index} className="btn btn-primary m-2" onClick={() => login(user)}>
                                        Login as {user.name}
                                    </button>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <h3 className="fs-3">User Roles</h3>
                        <hr />
                        <p className="fs-5">Admins have full access, while Users have limited access.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Example1;
