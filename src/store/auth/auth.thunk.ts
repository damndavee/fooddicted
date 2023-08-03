import { createAsyncThunk } from "@reduxjs/toolkit";

import { FooddictedService } from "../../services/auth.service";
import { AuthUser } from "./auth.type";

export const signUpUserThunk = createAsyncThunk('auth/SIGNUP_USER', 
    (credentials: {email: string, password: string}) => FooddictedService.authenticateUser(credentials, 'signUp')
);

export const signInUserThunk = createAsyncThunk('auth/SIGNIN_USER', 
    (credentials: {email: string, password: string}) => FooddictedService.authenticateUser(credentials, 'signInWithPassword')
);

export const createUserWithAdditionalDataThunk = createAsyncThunk('auth/CREATE_USER_ADDITIONAL_DATA',
    (user: AuthUser) => FooddictedService.createUserWithAdditionalData(user)
);

export const getAllUsersThunk = createAsyncThunk('auth/GET_ALL_USERS', 
    () => FooddictedService.getAllUsers()
);