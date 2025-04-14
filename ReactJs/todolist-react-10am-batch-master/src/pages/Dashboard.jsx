import React, { useState } from 'react'
import { createnewuser, deleteuser, getAllusers } from '../database/userData'

function Dashboard() {
    const [usersdata, setusersdata] = useState(getAllusers());
    
    const deleteHandler = (index) =>{
        deleteuser(index);
        window.location.reload();
    }

    
  return (
    <div className='container p-3 p-md-5'>
        <h1 className="fs-3">users dashboard</h1>
        <hr />

        <table className="" >
            <tr className=''>
                <th>SI.No</th>
                <th>Email Address</th>
                <th>Phone number</th>
                <th>Action</th>
            </tr>
            {
               usersdata.length==0?(
                    <tr>
                        <td colSpan={4} className='text-center'>No users data found</td>
                    </tr>
               ):(
                usersdata.map((item, index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td className='d-flex gap-2'>
                        <a href={`/edit/${index}`} className='btn btn-primary btn-sm'><i className='bi bi-pencil'></i></a>
                        <a href={`/details/${index}`} className='btn btn-success btn-sm'><i className='bi bi-eye'></i></a>
                        <button className='btn-sm btn btn-danger' onClick={()=>deleteHandler(index)}><i className='bi bi-trash'></i></button>
                        </td>
                    </tr>
                    ))
               )
            }
        </table>
    </div>
  )
}

export default Dashboard