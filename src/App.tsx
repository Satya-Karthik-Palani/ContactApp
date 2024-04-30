import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Contacts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Router>
        <Sidebar/>
        <div className='w-full bg-gray-200'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
