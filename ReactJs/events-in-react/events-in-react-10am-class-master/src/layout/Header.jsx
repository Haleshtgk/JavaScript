import React from 'react'

function Header() {
  return (
  <header className='d-flex justify-content-between align-items-center gap-2 p-3 px-5 bg-primary'>
        <h1 className="fs-4 text-light">React Events</h1>
        <ul className=' gap-2 align-items-center nav'>
            <li className='nav-item'><a href="/example1" className='nav-link text-light'>Example1</a></li>
            <li className='nav-item'><a href="/example2" className='nav-link text-light'>Example2</a></li>
            <li className='nav-item'><a href="/example3" className='nav-link text-light'>Example3</a></li>
            <li className='nav-item'><a href="/example4" className='nav-link text-light'>Example4</a></li>
            <li className='nav-item'><a href="/example5" className='nav-link text-light'>Example5</a></li>
            <li className='nav-item'><a href="/example6" className='nav-link text-light'>Example6</a></li>
        </ul>
  </header>
  )
}

export default Header