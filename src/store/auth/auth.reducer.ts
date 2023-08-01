import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {};
type Reducers = {};

const slice = createSlice<SliceState, Reducers>({
    name: "authReducer",
    initialState: {},
    reducers: {},
    extraReducers: builder => {},
});

export const {} = slice.actions;
export default slice.reducer;