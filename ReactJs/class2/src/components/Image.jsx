import React from 'react'

function Image({address, text, w, cls}) {
  return <img src={address} alt={text} width={w} className={cls} />
}

export default Image