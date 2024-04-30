import {createSlice} from "@reduxjs/toolkit"
import { contactList } from "./Data"

const contactSlice = createSlice({
    name: "contacts",
    initialState:contactList,
    reducers:{

    }
})

export default contactSlice.reducer;