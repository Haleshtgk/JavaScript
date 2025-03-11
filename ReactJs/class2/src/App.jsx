import React from 'react';
import Card from './components/Card';
import './index.css';

function App() {
  return (
    <section className="container-fluid p-3 p-md-5">
      <center className="bg-success text-white p-3">
        <h1 className="fs-1">We create healthy buildings</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo</p>
        <p>sagittis suscipit ultrices. Images from <a href="https://www.freepik.com">FreepiK</a></p>
      </center>
      <hr />
      <div className="card-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg" w="100%" subheading="Design" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
        <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/low-angle-shot-arc-azadi-tower-t.jpg" w="50%" subheading="Research" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
        <Card address="https://assets.nicepagecdn.com/d2cc3eaa/6272611/images/brilliant-architectural-piece-sh.jpg" w="100%" subheading="Strategy" subpara="Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet" />
      </div>
    </section>
  );
}

export default App;