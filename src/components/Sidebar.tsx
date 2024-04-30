import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-white rounded-tr-lg rounder-br-lg text-gray-700 h-screen w-40 sm:w-80 flex flex-col'>
      <Link to="/" className="p-2 sm:p-4 m-2 sm:m-4 rounded-xl bg-blue-500 text-center">
        <h2 className="text-sm sm:text-lg font-semibold">Contacts</h2>
      </Link>
      <Link to="/chartsmaps" className="p-2 sm:p-4 m-2 sm:m-4 rounded-xl bg-blue-500 text-center">
        <h2 className="text-sm sm:text-lg font-semibold">Charts and maps</h2>
      </Link>
    </div>
  )
}

export default Sidebar