import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer,  } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducer from "./auth/auth.reducer";
import navigationReducer from "./navigation/navigation.reducer";
import recipesReducer from "./recipes/recipes.reducer";

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['users', 'authUser'],
}

const recipesPersistConfig = {
    key: 'recipes',
    storage: AsyncStorage,
    whitelist: ['localStorageRecipes'],
    
}

export const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: persistReducer(recipesPersistConfig, recipesReducer),
    navigation: navigationReducer,
});