
import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function App(){
   return (
    <div className='App'>
        <Router>
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    </div>
   ) 
}

export default App


