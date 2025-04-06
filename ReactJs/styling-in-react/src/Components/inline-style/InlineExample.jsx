import React from 'react'

function InlineExample() {
  return (
    <div className="container">
        <h1 className="fs-1 text-center">Inline style Components</h1>
        <hr />
        <div style={
            {
                padding: '30px',
                border:'1px solid #ccc',
                boxShadow:'0px 0px 10px #ccc',
                background:'lightblue',
                display:'flex',
                gap:20
            }
        }>
            <h1 style={
                {
                    padding:'10px',
                    textAlign:'center',
                    color:'white',
                    backgroundColor:'#0c0c0c',
                    borderBottom:'5px solid green',
                    marginTop:'30px',
                    borderRadius:'10px',
                    flex:1
                }
            }>
                Inline Style
            </h1>
            <h1 style={
                {
                    padding:'10px',
                    textAlign:'center',
                    color:'white',
                    backgroundColor:'#0c0c0c',
                    borderBottom:'5px solid green',
                    marginTop:'30px',
                    borderRadius:'10px',
                    flex:1
                }
            }>
                Inline Style
            </h1>
            <h1 style={
                {
                    padding:'10px',
                    textAlign:'center',
                    color:'white',
                    backgroundColor:'#0c0c0c',
                    borderBottom:'5px solid green',
                    marginTop:'30px',
                    borderRadius:'10px',
                    flex:1
                }
            }>
                Inline Style
            </h1>
        </div>
    </div>
  )
}

export default InlineExample