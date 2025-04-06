import { Check, Email, Numbers, PrecisionManufacturingOutlined } from '@mui/icons-material'
import React from 'react'
import Bank from '../bank/bank'
import Address from '../address/Address'

function Card({data}) {
  return (
    <div className='card mb-4'>
            <div className="card-header">

            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item"><b><PrecisionManufacturingOutlined/> Username: </b> {data.name}</li>
                    <li className="list-group-item"><b><Email/> Email: </b> {data.email}</li>
                    <li className="list-group-item"><b><Numbers/> Age: </b> {data.age} Years</li>
                    <li className="list-group-item"><b><Check/> </b> {data.age>18?(<span className='text-success'>Eligible for voting</span> ):(<span className='text-danger'>Not Elible for Voting</span> )}</li>

                    <Bank bankData={data.bank}/>
                    <Address addressData={data.address}/>

                  
                </ul>
            </div>
            <div className="card-footer">
                <button className='btn btn-dark w-100'>View more details</button>
            </div>
    </div>
  )
}

export default Card