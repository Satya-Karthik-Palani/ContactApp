import {createSlice} from "@reduxjs/toolkit"
import { contactList } from "./Data"

const contactSlice = createSlice({
    name: "contacts",
    initialState:contactList,
    reducers:{
        addContact : (state,action) => {
            state.push(action.payload)
        },
        updateContact : (state,action) => {
            const {firstname,lastname,status,id} = action.payload;
            
            const contact = state.find(c => c.id===id);
            if(contact){
                contact.id=id;
                contact.firstname=firstname;
                contact.lastname=lastname;
                contact.status=status;
            }
        },
        deleteContact : (state,action) => {
            const {id} = action.payload;
            const contact = state.find(c => c.id===id);
            if(contact){
                return state.filter(c=>c.id!==id);
            }
        }
    }
})
export const {addContact,updateContact, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;