import { call, all } from "redux-saga/effects";
import { authSagaWatcher } from "./auth/auth.saga";
import { navigationSagaWatcher } from "./navigation/navigation.saga";


export function* rootSaga() {
    yield all([call(authSagaWatcher), call(navigationSagaWatcher)]);
}