import { call, all, put } from "redux-saga/effects";
import { createUserWithAdditionalDataThunk, signUpUserThunk } from "./auth/auth.thunk";

const user = {
    email: "sampleUser1@user.com",
    nickname: "sampleUser1",
    password: "P@ssword!@#23",
    confirmPassword: "P@ssword!@#23",
    id: 1,
}

function* initialSaga() {
    yield console.log("INITIALIZED!");
}

export function* rootSaga() {
    yield all([call(initialSaga)]);
}