import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts';
import Sidebar from './components/Sidebar';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ChartsMaps from './components/ChartsMaps';

function App() {
  return (
    <div className='flex'>
      <Router>
        <Sidebar/>
        <div className='w-full bg-gray-200'>
          <Routes>
            <Route path='/' element={<Contacts/>}></Route>
            <Route path='/newcontact' element={<AddContact/>}></Route>
            <Route path='/edit/:id' element={<EditContact/>}></Route>
            <Route path='/chartsmaps' element={<ChartsMaps/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
