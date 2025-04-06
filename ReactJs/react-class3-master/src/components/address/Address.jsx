import React from 'react'
import './address.css'

function Address({ addressData }) {
    if (!Array.isArray(addressData)) {
      console.error("addressData is not an array:", addressData);
      return <p>No address data available</p>;
    }
  
    return (
      <div>
        <table className='w-100' border={1}>
          <thead>
            <tr>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {addressData.map((item, index) => (
              <tr key={index}>
                <td>{item.city}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default Address  