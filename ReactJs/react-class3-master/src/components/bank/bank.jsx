import React from 'react'
import './bank.css'

function Bank({bankData}) {
  return (
    <div>
      <table className='w-100' border={1}>
        <tr>
            <th>SI. No</th>
            <th>Bank Name</th>
            <th>Account Number</th>
            <th>Account Type</th>
        </tr>
      {bankData.map((item, index)=>(
           <tr key={index}>
            <td>{index+1}</td>
            <td>{item.bName}</td>
            <td>AC9989878{item.accNo}</td>
            <td>{item.type}</td>
           </tr>
        ))}
      </table>
    </div>
  )
}

export default Bank