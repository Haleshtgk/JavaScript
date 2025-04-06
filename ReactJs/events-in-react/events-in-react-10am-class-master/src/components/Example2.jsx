import React, { useState } from 'react'

function Example2() {
    const [total, setTotal] = useState(0); //to store calclated total value
    const [count, setCount] = useState(0);
    const displayALert = () =>{
        alert("this is the display alert function ininternally on click time")
    }


    const calculateTotalValue = (firstNumber, secondNumber) =>{
        setTotal(firstNumber+secondNumber);
    }   
    const resetTheToatl = () =>{
        setTotal(0);
    }


    //create a functions to increment and decrement the count state on when user clicks the buttons
    const incrementhandler = () =>{
        if(count<10){
            setCount(count+1)
        }
    }

    const decrementhanlder = () =>{
        if(count>0){
            setCount(count-1)
        }
    }

    return (
    <div className='container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="border p-3 shadow">
                <p><b>2) React event listeners</b></p>
                <p>To listen to events in React, add the onClick attribute which is the event handler to the target element. This specifies the function to be executed when that element is clicked not only click event we listen any event in perticular element or tag in jsx components</p>
                <br />
                <hr />
                <h4 className="fs-5">Calling no parameter functions on events</h4>
                <button className="btn btn-primary" onClick={displayALert}>displayAlert</button>

                <hr />
                <h4 className="fs-5">Calling parameter function on events</h4>
                <p>When we are sending paramters to function on in events we need to use arrow function to call and pass the parameter values</p>
                <div className="alert alert-success">
                    <h1 className="fs-5 alert-heading">The total value currently = {total}</h1>
                </div>
              <div className="d-flex gap-2">
                  <button className="btn btn-success" onClick={()=>calculateTotalValue(20, 40)}>Call parameter function</button>
                <button className="btn btn-danger" onClick={resetTheToatl}>Reset</button>
              </div>

              <div className="border p-3 mt-4">
                <h1 className='fs-4'>Count = {count}</h1>
                {
                    count==10?(
                        <div className="alert alert-danger">
                            <p className="fs-6 m-0">You are reached Max count</p>
                        </div>
                    ):count==0?(
                        <div className="alert alert-danger">
                        <p className="fs-6 m-0">You are reached Min count</p>
                    </div>
                    ):(
                        <div className="alert alert-success">
                        <p className="fs-6 m-0">You are in middle range current count = {count}</p>
                    </div>
                    )
                }
                <div className="d-flex gap-3">
                    <button className="btn btn-success" onClick={incrementhandler}>Increment count</button>
                    <button className="btn btn-danger" onClick={decrementhanlder}>Decrement count</button>
                </div>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example2