import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AllUsers from './pages/AllUsers/AllUsers';
import AllStudents from './pages/AllStudents/AllStudents';
import Error from './pages/error/Error';

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllUsers />} />
          <Route path='/students' element={<AllStudents />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
