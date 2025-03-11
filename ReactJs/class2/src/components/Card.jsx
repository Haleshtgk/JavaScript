import React from 'react'

function Card({address, w, cls, subheading, subpara}) {
  return (
    <div className='card'>
        <div className="card-header" p-3>
            <img src={address} alt="img" width={w} />
        </div>
        <div className="card-body">
            <h3 className={cls}>{subheading}</h3>
            <p className={cls}>{subpara}</p>
        </div>
        
    </div>
  )
}

export default Card