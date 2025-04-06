import React, { useState } from 'react';

function Example6() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers");
      return;
    }

    switch (op) {
      case 'add':
        setResult(a + b);
        setOperation('Addition');
        break;
      case 'subtract':
        setResult(a - b);
        setOperation('Subtraction');
        break;
      case 'multiply':
        setResult(a * b);
        setOperation('Multiplication');
        break;
      case 'divide':
        if (b !== 0) {
          setResult(a / b);
          setOperation('Division');
        } else {
          alert("Cannot divide by zero");
        }
        break;
      case 'modulus':
        if (b !== 0) {
          setResult(a % b);
          setOperation('Modulus');
        } else {
          alert("Cannot perform modulus with zero");
        }
        break;
      default:
        break;
    }
  };

  const resetAll = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setOperation('');
  };

  return (
    <div className="container-fluid p-3 p-md-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="border p-3 shadow">
            <p><b>6) React Arithmetic Operation with Inputs</b></p>
            <p>This example allows users to input two numbers and perform various arithmetic operations dynamically.</p>
            <hr />
            <div className="mb-3">
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <button className="btn btn-primary" onClick={() => handleOperation('add')}>Add</button>
              <button className="btn btn-secondary" onClick={() => handleOperation('subtract')}>Subtract</button>
              <button className="btn btn-success" onClick={() => handleOperation('multiply')}>Multiply</button>
              <button className="btn btn-warning" onClick={() => handleOperation('divide')}>Divide</button>
              <button className="btn btn-dark" onClick={() => handleOperation('modulus')}>Modulus</button>
              <button className="btn btn-danger" onClick={resetAll}>Reset</button>
            </div>

            {
              result !== null && (
                <div className="alert alert-info">
                  <h5>{operation} Result: {result}</h5>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example6;
