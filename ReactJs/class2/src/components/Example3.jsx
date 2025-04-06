//global variables

import React from "react";
//global variables
var name = "Arun";
var user = {
    username:"test",
    age:23
}

var numbers = [123, 434, 54, 6,33, 34,33, 22];
function sayHello(){
    return <h1 className="text-primary">Hi</h1>
}
var currentTime = new Date().toLocaleTimeString().split(":")[0];
console.log(new Date().toLocaleTimeString().split(":")[0]);

class Example3 extends React.Component{
    //local variables

    render(){
        return(
            <section className="container-fluid p-3 p-md-5">
                <h1>This is the class component Example3</h1>
                <h1 className="fs-2">Name Variables value = {name}</h1>
                <h2>renderring user object</h2>
                <p>Username = {user.username}</p>
                <p>Age = {user.age}</p>
                <hr />
                <div className="card w-25">
                    <h4 className="fs-4">Iterating all numbers array</h4>
                    <hr />
                    {/* {
                        numbers.map((item, index)=>{
                            return(

                            )
                        })
                    } */}
                    {
                        numbers.map((item, index)=>(
                            <h3 className="fs-3 text-success" key={index}><span className="text-danger">{index})</span> {item}</h3>
                        ))
                    }
                </div>
                <h1>Function returned value </h1>
                {sayHello()}

                {currentTime<12?(<h1 className="text-success">Good morning</h1>):(<h1 className="text-primary">Good afternoon</h1>)}
            </section>
        )
    }
}

export default Example3;