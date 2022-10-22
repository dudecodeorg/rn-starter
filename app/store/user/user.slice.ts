import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../models/User.type';
import { fetchUser } from './user.thunks';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ...({
      name: '',
      lastName: '',
      age: undefined,
    } as User),
    loading: false,
  },
  reducers: {
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, response) => {
        state.name = response.payload.name;
        state.lastName = response.payload.lastName;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
      }),
});

export const { setAge } = userSlice.actions;
export default userSlice.reducer;
