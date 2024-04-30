import React from 'react'

function Sidebar() {
  return (
    <div className='bg-white rounded-tr-lg rounder-br-lg text-gray-700 h-screen w-80 flex flex-col'>
      <div className="p-4 m-4 rounded-xl bg-blue-500 text-center">
        <h2 className="text-lg font-semibold">Contacts</h2>
      </div>
      <div className="p-4 m-4 rounded-xl bg-blue-500 text-center">
        <h2 className="text-lg font-semibold">Charts and maps</h2>
      </div>
    </div>
  )
}

export default Sidebar