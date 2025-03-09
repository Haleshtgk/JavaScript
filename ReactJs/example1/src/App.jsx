import React from 'react'

function App() {
  const title = "WELCOME TO REACT";
  const subtitle = "This is the react class1"

  const heading1 = React.createElement(
    "h1", //tag name
    {name:"heading", id:"heading1"}, //attributes
    "This is the heading 1" //text inside the tag
  );

  const image = React.createElement(
    'img',
    {src:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", alt:"loading..", width:"100px"}
  )

  const section1 = React.createElement(
    "section",
    {className:"container-fluid p-3 p-md-5 bg-light"}
  )

  const websiteLink = "https://github.com"

    const testfunction = (name) =>{
      return <h1 className='text-danger'>{name.toUpperCase()}</h1>
    }
  return (
   <section className="container p-3 p-md-5">
      <h1 className="text-primary fs-2 text-center">{title}</h1>
      <p className="fs-6 text-secondary text-center">Copyrights &copy; {new Date().getFullYear()} All rights reserved</p>
      <p className="small text-center">{subtitle}</p>

    <div className="row">
        <div className="col-md-4">
          {heading1}
        </div>
        <div className="col-md-6">
          {image}
        </div>
        <div className="col-md-6">
          {section1}
        </div>
        <a href={websiteLink}>visit to website</a>
    </div>

    <h1 className="fs-1">test function resturned value = {testfunction("hello world")}</h1>
   </section>
  )
}

export default App