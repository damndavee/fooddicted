import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    extraReducers: builder => {},
});

export const {} = slice.actions;
export default slice.reducer;