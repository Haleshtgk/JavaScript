import React from 'react'

function ObjectStyle1() {
    const containerStyles = {
        display:'flex',
        gap:'20px',
        padding:"30px"
    }
    const cardStyles = {
        flex:1,
        padding:"10px",
        border:'1px solid #ccc',
    }
    const cardImage = {
        width:"100%",
        borderRadius:'10px',
        marginBottom:'10px'
    }

    const title = {
        fontSize:'1.4rem'
    }

    const subtitle = {
        fontSize:'1.2rem',
        textAlign:'justify'
    }



  return (
  <section>
    <div className="card-container" style={containerStyles}>
        <div className="item" style={cardStyles}>
            <img src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=" alt="" style={cardImage} />
            <h1 style={title}>this is the headind</h1>
            <p style={subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum dolorem distinctio quis nobis, aliquam eaque quia earum, dolorum excepturi sequi voluptas. Libero, beatae dignissimos! Vero earum fuga iure minus.</p>
        </div>

        <div className="item" style={cardStyles}>
            <img src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=" alt="" style={cardImage}/>
            <h1 style={title}>this is the headind</h1>
            <p style={subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum dolorem distinctio quis nobis, aliquam eaque quia earum, dolorum excepturi sequi voluptas. Libero, beatae dignissimos! Vero earum fuga iure minus.</p>
        </div>

        <div className="item" style={cardStyles}>
            <img src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=" alt=""  style={cardImage}/>
            <h1 style={title}>this is the headind</h1>
            <p style={subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum dolorem distinctio quis nobis, aliquam eaque quia earum, dolorum excepturi sequi voluptas. Libero, beatae dignissimos! Vero earum fuga iure minus.</p>
        </div>
    </div>
  </section>
  )
}

export default ObjectStyle1