import React from 'react'
import './App.css';
import InlineExample from './Components/inline-style/InlineExample'
import ObjectStyle1 from './Components/object-style/ObjectStyle1';
import ObjectStyle2 from './Components/object-style/ObjectStyle2';

function App() {
  return (
    <section className="container-fluid">
      <h1 className="display-1 fw-bold text-center p-3 border-bottom border-primary">Styles in React</h1>
      <div className="row p-5 bg-light">
        <div className="col-md-6 card p-4">
          <h1 className="fs-4 globalClass">1) index.css (GLOBAL CSS File: Using css module)</h1>
        </div>
        <div className="col-md-6 card p-4">
          <h1 className="fs-4 appClass">2) App.css APP CSS file: Using Parent components css</h1>
        </div>
      </div>
      <InlineExample/>
      <ObjectStyle1/>
      <ObjectStyle2/>
    </section>
  )
}

export default App