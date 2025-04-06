import React from 'react'

function HyperLink({link, cls, text}) {
  return <a href={link} className={cls}>{text}</a>
}

export default HyperLink