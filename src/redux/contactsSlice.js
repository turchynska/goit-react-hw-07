import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./contactsOps";


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) =>{
            state.loading = false;
            state.items.push(action.payload)
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(contact => contact.id !== action.payload.id)
        })
        .addCase(deleteContact.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default contactSlice.reducer