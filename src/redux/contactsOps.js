import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://66e9d82387e41760944ae7ae.mockapi.io/contacts",
});

export const fetchContact = createAsyncThunk (
    'contacts/fetchAll',
    async(_, thunkAPI) => {
        try{
            const {data} = await instance.get('contact');
            return data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(profile, thunkAPI) => {
        try{
            const {data} = await instance.post('contact', profile)
            return data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async(contactId, thunkAPI) => {
        try{
            const {data} = await instance.delete(`contact/${contactId}`)
            return data;
        }catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)