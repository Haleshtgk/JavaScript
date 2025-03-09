import React from 'react'
import Example1 from './components/Example1'

function App() {
  return (
   <section className="container-fluid p-3 p-md-5">
      <center className="bg-success text-white p-3">
        <h1 className="fs-1">This is the main App.jsx component</h1>
      </center>
      <hr />
      <Example1/>
   </section>
  )
}

export default App