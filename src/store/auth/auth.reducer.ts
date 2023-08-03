import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { signUpUserThunk } from "./auth.thunk";
import { AuthUser, AuthenticatedUser, ValidationResults } from "./auth.type";

type SliceState = {
    authUser: AuthenticatedUser;
    users: AuthUser[];
    validators: ValidationResults;
    isLoading: boolean;
};
type Reducers = {};

const slice = createSlice<SliceState, Reducers>({
    name: "authReducer",
    initialState: {
        authUser: {
            id: "",
            token: "",
            isAuthenticated: false,
        },
        isLoading: false,
        users: [],
        validators: {}
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signUpUserThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(signUpUserThunk.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(signUpUserThunk.rejected, state => {
            state.isLoading = false;
        });
    },
});

export const {} = slice.actions;
export default slice.reducer;