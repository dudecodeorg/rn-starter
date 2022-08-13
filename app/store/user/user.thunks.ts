import {createAsyncThunk} from "@reduxjs/toolkit";
import User from "../../models/User.type";

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await fetch('https://reqres.in/api/users/2');
    const res = (await response.json()).data;
    return {
        name: res.first_name,
        lastName: res.last_name
    } as User;
})
