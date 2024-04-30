import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteContact } from './ContactReducer';

interface RootState {
    contacts: ContactType[];
}

interface ContactType {
    firstname: string;
    lastname: string;
    status: string;
    id: number;
}

function Home() {
    const contacts = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch();

    const onDeleteHandler = (id: number) => {
        dispatch(deleteContact({id:id}));
    }

    return (
    <div>
        <div className='w-auto flex justify-between mx-auto sm:mx-8 mt-4 sm:mt-8 mb-4 p-4'>
            <div>
                <h1 className='font-bold text-2xl sm:text-4xl text-gray-700'>Contacts</h1>
            </div>
            <div>
                <Link to="/newcontact" className='font-semibold text-white bg-blue-600 px-4 py-3 text-md sm:text-xl rounded-lg'>+ Create</Link>
            </div>
        </div>
        <hr className="w-11/12 mx-auto border-t-2 border-gray-700"/>
        <div className='flex flex-wrap justify-center mt-5 mx-auto'>
            {contacts.length>0   ? contacts.map((contact)=>(<div key={contact.id} className='flex flex-col justify-between rounded-lg w-80 h-56 m-4 p-4 bg-white text-gray-700'>
                <div className='flex text-2xl pt-4 font-semibold'> <p className='mr-2'>{contact.firstname}</p> <p className='overflow-hidden whitespace-nowrap w-full truncate'>{contact.lastname}</p></div>
                <p className='text-xl'>Status : {contact.status==="active" ? "🟢" : "🔴"}</p>
                <div className='flex text-center space-x-0.5 text-black'>
                    <Link to={`/edit/${contact.id}`} className="w-1/2 px-4 py-3 bg-gray-200 rounded-md font-semibold hover:text-white hover:bg-green-500">Edit</Link>
                    <button onClick={()=>onDeleteHandler(contact.id)} className="w-1/2 px-4 py-3 bg-gray-200 rounded-md font-semibold hover:text-white hover:bg-red-500">Delete</button>
                </div>
            </div>))
            :
            <p className='text-xl text-gray-700 mt-5'>No contacts found</p>}
        </div>
    </div>
  )
}

export default Home