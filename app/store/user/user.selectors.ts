import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";

const selectUser = (state: RootState) => state.user;

export const selectUserAge = createSelector(selectUser, s => s.age);
