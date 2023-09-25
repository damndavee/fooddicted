import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserData } from "./auth.type";

export const allUsersSelector = (state: RootState) => state.auth.users;
export const validatorsSelector = (state: RootState) => state.auth.validators;
export const isAuthenticatingSelector = (state: RootState) => state.auth.isLoading;
export const isUserAuthenticatedSelector = (state: RootState) => state.auth.authUser.isAuthenticated;

export const extractedUsersData = createSelector(
    [allUsersSelector],
    (users) => (dataKey: keyof UserData) => users.map(user => user[dataKey])
);
