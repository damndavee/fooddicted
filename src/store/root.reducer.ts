import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducer from "./auth/auth.reducer";
import navigationReducer from "./navigation/navigation.reducer";

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['users'],
}

export const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    navigation: navigationReducer,
});