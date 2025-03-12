// // import React from 'react';
// // import Card from './components/Card';
// // import './index.css';

// // function App() {
// //   return (
// //     <section className="container-fluid p-3 p-md-5">
// //       <center className="bg-success text-white p-3">
// //         <h1 className="fs-1">We create healthy buildings</h1>
// //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo</p>
// //         <p>sagittis suscipit ultrices. Images from <a href="https://www.freepik.com">FreepiK</a></p>
// //       </center>
// //       <hr />
// //       <div className="card-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
// //         <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg" w="100%" subheading="Design" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
// //         <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-arc-azadi-tower-t.jpg" w="50%" subheading="Research" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
// //         <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/brilliant-architectural-piece-sh.jpg" w="100%" subheading="Strategy" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
// //       </div>
// //     </section>
// //   );
// // }

// // export default App;


// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Card from './components/Card';
// import './index.css';

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="container">
//       <div className="content" data-aos="fade-up">
//         <h1>We create healthy buildings</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo</p>
//         <p>Images from <a href="https://www.freepik.com">FreepiK</a></p>
//       </div>
//       <hr />
//       <div className="card-container">
//         <Card
//           address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg"
//           subheading="Design"
//           subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet"
//           animation="fade-up"
//         />
//         <Card
//           address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-arc-azadi-tower-t.jpg"
//           subheading="Research"
//           subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet"
//           animation="zoom-in"
//         />
//         <Card
//           address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/brilliant-architectural-piece-sh.jpg"
//           subheading="Strategy"
//           subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet"
//           animation="fade-left"
//         />
//       </div>
//     </section>
//   );
// }

// export default App;


import React from 'react'
import './App.css'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'
import Button from './components/Button'
import HyperLink from './components/HyperLink'
import Image from './components/Image'
import Profile from './components/Profile'
import Logo from './components/Logo'
import Grid from './components/Grid'
import Example6 from './components/Example6'
import Greeting from './components/Greeting'
import SayHi from './components/SayHi'
import Information from './components/Information'

function App() {
  return (
   <section className="container-fluid p-3 p-md-5">
      <center className="bg-success text-white p-3">
        <h1 className="fs-1">This is the main App.jsx component</h1>
      </center>
      <hr />
      {/* <Example1/> */}
      {/* <Example2></Example2> */}
      {/* <Example2/> */}
      {/* <Example3/> */}

      {/* <Example4 username="Arun kumar" age={26} isAdmin={false}  /> */}
      {/* <Example4 username="mehul" age={35} isAdmin={true}  /> */}


      {/* <Example5 username="Mohan kumar" email="ohanp@gmail.com" age={14} phone="++918376399" design="bg-dark text-white"/>
      <Example5 username="Arun kumar" email="arun@gmail.com" age={24} phone="+9187387844" design="bg-danger text-white"/> */}
      {/* <Button text="login" cls="btn btn-primary"/><br /><br />
      <Button text="Create account" cls="btn btn-success"/>
      <br /><br />
      <div className="card w-25">
        <div className="card-header">
        <Image address="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg" text="Loading.." w="100%" cls="rounded-3 p-2 border border-3 border-dark"/>
        </div>
        <div className="card-body">
          <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto explicabo omnis id consectetur delectus adipisci fuga libero incidunt nemo temporibus eius, officia molestias quia quaerat, ea molestiae aspernatur? Maiores!</p>
        </div>
        <div className="card-footer">
          <Button text="Know more" cls="btn btn-dark w-100"/>
          <HyperLink link="https://github.com" text="Learn more" cls="btn btn-dark w-100"/>
          <HyperLink link="https://be-practical.com" text="Know more" cls="btn btn-danger w-100 mt-2"/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <Profile address="https://www.webxcreation.com/event-recruitment/images/profile-1.jpg" w="100px" h="100px" cls="rounded-pill shadow mx-5"  />

              <Profile address="https://www.webxcreation.com/event-recruitment/images/profile-1.jpg" w="100px" h="100px" design={{
                border:"3px solid #0c0c0c",
                padding:'5px',
                borderRadius:"10px"
              }}/>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <header className="p-3 bg-white">
        <Logo address="https://pngimg.com/d/google_PNG102344.png" w="100px"/>
      </header>

<hr />
<header className="p-3 bg-light">
        <Logo address="https://pngimg.com/d/google_PNG102344.png" w="200px"/>
      </header>

      <hr />
     */}
  {/* <header className="p-3 bg-dark">
        <Logo address="https://pngimg.com/d/google_PNG102344.png" w="300px"/>
      </header>
        <Grid/> */}



        {/* <Example6 title="hello this is the title for React class component" img="https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/05/13185303/react-class.png" subtitle="A component in React is an independent and reusable block of code that has unique functionality. When such components are combined together it helps to make a dynamic and user-friendly UI for the web application. In other words, we can say that components are lego blocks for the webpage or UI that we are implementing." link="https://codedamn.com/news/reactjs/what-are-react-js-class-components"/>

        <Example6 title="hello this is the title for React Functional component" img="https://cdn.prod.website-files.com/670cbf146221ee06c3cdd761/670cbf146221ee06c3cde392_React%20Functional%20Components.avif" subtitle="A React Functional Component is a JavaScript function that returns JSX, which defines what the UI should look like. Unlike class components, which are based on ES6 classes and have lifecycle methods and internal state management, functional components are simpler and focus solely on rendering. They receive props as arguments and use these to display data. Initially, functional components were stateless and did not support lifecycle methods, but this changed with the introduction of React Hooks in version 16.8. " link="https://www.fynd.academy/blog/react-functional-components"/> */}



        {/* <Greeting name="arun" age={35}/> */}
        {/* <Greeting name="john" age={15}/> */}

        {/* <div className="row">
          <div className="col-md-6">
       <SayHi/>
          </div>
          <div className="col-md-6">
        <SayHi/>
          </div>
        </div> */}


        <Information productName="Mobile1" price="100" rating={4}/>
   </section>
  )
}

export default App