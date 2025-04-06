import React, { useState } from 'react';

function Example5() {
  const [result, setResult] = useState(0);

  const performSubtraction = (a, b) => {
    setResult(a - b);
  };

  const performMultiplication = (a, b) => {
    setResult(a * b);
  };

  const performDivision = (a, b) => {
    if (b !== 0) {
      setResult(a / b);
    } else {
      alert("Cannot divide by zero");
    }
  };

  const performModulus = (a, b) => {
    if (b !== 0) {
      setResult(a % b);
    } else {
      alert("Cannot perform modulus with zero");
    }
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className='container-fluid p-3 p-md-5'>
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="border p-3 shadow">
            <p><b>5) React Basic Arithmetic Operations</b></p>
            <p>This example demonstrates handling arithmetic operations using event listeners with parameterized functions in React.</p>
            <hr />
            <div className="alert alert-info">
              <h1 className="fs-5 alert-heading">Current Result = {result}</h1>
            </div>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <button className="btn btn-primary" onClick={() => performSubtraction(100, 45)}>Subtraction</button>
              <button className="btn btn-success" onClick={() => performMultiplication(10, 5)}>Multiplication</button>
              <button className="btn btn-warning" onClick={() => performDivision(40, 8)}>Division</button>
              <button className="btn btn-dark" onClick={() => performModulus(23, 4)}>Modulus</button>
              <button className="btn btn-danger" onClick={resetResult}>Reset Result</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example5;
