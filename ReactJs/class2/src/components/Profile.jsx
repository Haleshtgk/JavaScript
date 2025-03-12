import React from 'react'
import './profile.css'

function Profile({address, w, h, design, cls}) {
  return <img src={address} alt="profile" width={w} height={h} className={cls} style={design} c />
}

export default Profile