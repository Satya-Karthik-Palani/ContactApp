import React, { useState } from 'react'
import { addContact } from './ContactReducer';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

interface RootState {
    contacts: ContactType[];
}

interface ContactType {
    firstname: string;
    lastname: string;
    status: string;
    id: number;
}


function AddContact() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [status, setStatus] = useState("");

    const contacts = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = (e: React.FormEvent)=>{
        e.preventDefault();
        const ID = contacts.length>=1 ? contacts[contacts.length - 1].id + 1 : 1
        dispatch(addContact({firstname, lastname, status, id:ID}))
        navigate("/");
    }

    return (
        <div className='m-4 sm:m-8 p-2'>
            <div className='mb:5 sm:mb-8 ml-12'>
                <h1 className='font-bold text:2xl sm:text-4xl text-gray-700'>Add Contact</h1>
            </div>
            <hr className="w-11/12 mx-auto border-t-2 border-gray-700"/>
            <form className='flex flex-col gap-y-3 mx-auto w-11/12 sm:w-3/4 bg-white p-2 mt-2 sm:m-8 sm:p-8 rounded-lg text-gray-700'>
                <div className='flex flex-col sm:flex-row gap-x-2'>
                    <div className='flex flex-col gap-y-2 w-full sm:w-1/2'>
                        <label>First Name</label>
                        <input type="text" autoFocus className='border-2 rounded-md h-8 w-11/12 p-2' onChange={(e)=>setFirstname(e.target.value)}></input>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full sm:w-1/2'>
                        <label>Last Name</label>
                        <input type="text" autoFocus className='border-2 rounded-md h-8 w-11/12 p-2' onChange={(e)=>setLastname(e.target.value)}></input>
                    </div>
                </div>
                <div className='flex sm:gap-x-10 p-2 my-2 items-center'>
                    <label>Status</label>
                    <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                    className="block w-6/12 rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                    <option value="">Select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button className="w-1/2 mx-auto bg-blue-500 p-2 rounded-md cursor-pointer" onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default AddContact