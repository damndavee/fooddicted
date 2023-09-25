import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAllUsersThunk, signInUserThunk, signUpUserThunk } from "./auth.thunk";
import { AuthenticatedUser, UserData, ValidationResults } from "./auth.type";

type SliceState = {
    authUser: AuthenticatedUser;
    users: UserData[];
    validators: ValidationResults;
    isLoading: boolean;
};
type Reducers = {
    signOut: (state: SliceState) => void;
    setValidators: (state: SliceState, action: PayloadAction<ValidationResults>) => void;
};

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
    reducers: {
        signOut: state => {
            state.authUser = {
                id: "",
                token: "",
                isAuthenticated: false
            }
        },
        setValidators: (state, action) => {
            state.validators = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(signUpUserThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(signUpUserThunk.fulfilled, state => {
            state.isLoading = false;
        });
        builder.addCase(signUpUserThunk.rejected, state => {
            state.isLoading = false;
        });
        builder.addCase(signInUserThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(signInUserThunk.fulfilled, (state, action) => {
            state.isLoading = true;
            state.authUser.id = action.payload.localId;
            state.authUser.isAuthenticated = !!action.payload.idToken;
            state.authUser.token = action.payload.idToken;
        });
        builder.addCase(signInUserThunk.rejected, state => {
            state.isLoading = false;
        });
        builder.addCase(getAllUsersThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsersThunk.rejected, state => {
            state.isLoading = false;
        });
    },
});

export const { signOut, setValidators } = slice.actions;
export default slice.reducer;