
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProtectedRoute, Register, Error, Landing } from './pages'
import {
  Alljobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
        }>
          <Route index element={<Stats/>} />
          <Route path='all-jobs' element={<Alljobs/>} />
          <Route path='add-job' element={<AddJob/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='*' element={<Error />} />
         
      </Routes>
    </BrowserRouter>
    
      
    
    

  );
}

export default App;
