import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './layouts/Header'
import Pnf from './pages/Pnf'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Create from './pages/Create'
import Edit from './pages/Edit'
import Details from './pages/Details'

function App() {
  return (
    <div>
        <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Header/>

          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:index' element={<Edit/>}/>
            <Route path='/details/:index' element={<Details/>}/>
            <Route path='/*' element={<Pnf/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App