import { call, all } from "redux-saga/effects";

function* initialSaga() {
    yield console.log("INITIALIZED!");
}

export function* rootSaga() {
    yield all([call(initialSaga)]);
}