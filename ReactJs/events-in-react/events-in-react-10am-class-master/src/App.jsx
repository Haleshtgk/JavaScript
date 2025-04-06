import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Example1 from './components/Example1'
import NoPage from './layout/NoPage'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'
import Example6 from './components/Example6'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path='/example1' element={<Example1/>}/>
            <Route path='/example2' element={<Example2/>}/>
            <Route path='/example3' element={<Example3/>}/>
            <Route path='/example4' element={<Example4/>}/>
            <Route path='/example5' element={<Example5/>}/>
            <Route path='/example6' element={<Example6/>}/>
            <Route path='/*' element={<NoPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App