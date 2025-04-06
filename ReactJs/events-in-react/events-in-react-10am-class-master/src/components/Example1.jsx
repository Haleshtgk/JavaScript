import React, { useState } from 'react'

function Example1() {
    const [isCopied, setisCopied] = useState(false);

    const displayAlert = () =>{
        alert("this is the internal function")
    }
  return (
    <div className='container-fluid p-3 p-md-5'>
        <center>
            <h1 className='fs-1'>Inline functions example</h1>
            <p className='fs-5'>1) Call an inline function in an onClick event handler</p>
        </center>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="p-3 border shadow">
                    <h1 className="fs-4">Calling internal functions on any event here we can use onClick Event</h1>

                    <button className="btn btn-primary" onClick={displayAlert}>Call internal function on click event time</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="border p-3 shadow">
                    <h1 className="fs-4">Creating function for events on same line like inline functions</h1>

                    <button className='btn btn-success' onClick={
                        function(){
                          alert("this is the inline function")  
                        }
                    }>Call inline function</button>

                    <hr />
                    <h1 className="fs-4">Creating arrow functions</h1>
                    <hr />
                    <button className="btn btn-danger" onMouseEnter={()=>{
                        alert("this is the inline and arrow function..")
                    }}>Call arrow inline function</button>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-md-8 m-auto">
                <div className="border p-3 shadow">
                    <h1 className='fs-4'>handling user copy event on paragraph </h1>
                    <p className='lead' onCopy={
                        ()=>{
                            setisCopied(true)
                        }
                    }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur officiis aliquam ducimus magnam ipsa ab. Optio in consectetur magnam vel quos mollitia. Eligendi illo nam veritatis, quod cum laborum.
                    Sit, voluptas dolor, ipsam ad debitis quas voluptatibus quae vel alias natus mollitia dolores esse quam voluptatum cupiditate modi quibusdam impedit laboriosam ipsa vero maiores dolorum accusantium necessitatibus corporis? Nisi!
                    Est voluptatem eos velit neque blanditiis nulla deleniti minus eius autem laborum magnam, aspernatur modi nihil beatae vitae corporis sunt quas excepturi dolores qui quo? Labore autem earum quod enim.</p>

                    {isCopied==true?(
                        <div className="alert alert-danger">
                            <h5 className="alert-heading">user is copied</h5>
                            <p className="fs-6 alert-subtitle">this is the error text</p>
                        </div>
                    ):(null)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example1