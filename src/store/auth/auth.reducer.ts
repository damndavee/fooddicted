import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { signInUserThunk, signUpUserThunk } from "./auth.thunk";
import { AuthUser, AuthenticatedUser, ValidationResults } from "./auth.type";

type SliceState = {
    authUser: AuthenticatedUser;
    users: AuthUser[];
    validators: ValidationResults;
    isLoading: boolean;
};
type Reducers = {
    signOut: (state: SliceState) => void;
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
        }
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
            state.isLoading = true;
        })
    },
});

export const { signOut } = slice.actions;
export default slice.reducer;