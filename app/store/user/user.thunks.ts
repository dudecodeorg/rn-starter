import {createAsyncThunk} from "@reduxjs/toolkit";
import User from "../../models/User.type";
import { getUserApi } from '../../services/api/userApi';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await getUserApi();
    return {
        name: response.data.data.first_name,
        lastName: response.data.data.last_name
    } as User;
})
