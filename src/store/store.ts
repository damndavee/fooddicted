import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import { rootReducer } from "./root.reducer";
import { rootSaga } from "./root.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware, thunk];

export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});
 
export const persistor = persistStore(store);
// persistor.purge();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

sagaMiddleware.run(rootSaga);