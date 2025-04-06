import React from 'react'

function NoPage() {
  return (
    <div className='container p-3 p-md-5'>
        <div className="row">
            <div className="col-md-4 m-auto">
                <div className="card p-3">
                    <h1 className="fs-1">Page not found</h1>
                    <a href='/example1' className="btn btn-primary">Back to example1</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoPage