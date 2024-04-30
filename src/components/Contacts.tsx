import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

interface RootState {
    contacts: ContactType[];
}

interface ContactType {
    firstname: string;
    lastname: string;
    status: boolean;
    id: number;
}

function Home() {
    const contacts = useSelector((state: RootState) => state.contacts);
    return (
    <div>
        <div className='w-auto flex justify-between mx-8 mt-8 mb-4 p-4'>
            <div>
                <h1 className='font-bold text-4xl text-gray-700'>Contacts</h1>
            </div>
            <div>
                <Link to="/" className='font-semibold text-white bg-blue-600 px-4 py-3 text-xl rounded-lg'>+ Create</Link>
            </div>
        </div>
        <hr className="w-11/12 mx-auto border-t-2 border-gray-700"/>
        <div className='flex flex-wrap justify-center'>
            {contacts ? contacts.map((contact)=>(<div key={contact.id} className='flex flex-col justify-between rounded-lg w-72 h-56 m-4 p-4 bg-white text-gray-700'>
                <div className='flex text-2xl pt-4 font-semibold'> <p className='mr-2'>{contact.firstname}</p> <p>{contact.lastname}</p></div>
                <p className='text-xl'>Status : {contact.status===true ? "🟢" : "🔴"}</p>
                <div className='flex text-center space-x-0.5 text-black'>
                    <Link to="" className="w-1/2 px-4 py-3 bg-gray-200 rounded-md font-semibold hover:text-white hover:bg-green-500">Edit</Link>
                    <Link to="" className="w-1/2 px-4 py-3 bg-gray-200 rounded-md font-semibold hover:text-white hover:bg-red-500">Delete</Link>
                </div>
            </div>))
            :
            <p>No contacts</p>}
        </div>
    </div>
  )
}

export default Home