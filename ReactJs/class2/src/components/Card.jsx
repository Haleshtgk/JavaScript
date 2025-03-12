// import React from 'react';
// import './index.css';

// function Card({ address, w, cls, subheading, subpara }) {
//   return (
//     <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
//       <div className="card-header" style={{ padding: '1rem' }}>
//         <img src={address} alt="img" width={w} />
//       </div>
//       <div className="card-body" style={{ textAlign: 'center' }}>
//         <h3 className={cls}>{subheading}</h3>
//         <p className={cls}>{subpara}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from 'react';
import 'aos/dist/aos.css';

function Card({ address, subheading, subpara, animation }) {
  return (
    <div className="card" data-aos={animation}>
      <div className="card-header">
        <img src={address} alt="img" />
      </div>
      <div className="card-body">
        <h3>{subheading}</h3>
        <p>{subpara}</p>
      </div>
    </div>
  );
}

export default Card;
