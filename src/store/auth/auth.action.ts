import { createAction } from "redux-actions";
import { AuthUser } from "./auth.type";

export const authenticateUserAction = createAction<{userData: AuthUser, isSignUpForm: boolean}>("auth/AUTHENTICATE");
export const signInUserAction = createAction<{email: string, password: string}>('auth/SIGNIN_USER');