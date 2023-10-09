import { call, all, put, select, takeLatest } from "redux-saga/effects";
import { authSagaWatcher } from "./auth/auth.saga";
import { navigationSagaWatcher } from "./navigation/navigation.saga";
import { fetchRandomRecipesThunk } from "./recipes/recipes.thunk";
import { localStorageRecipesSelector } from "./recipes/recipes.selector";
import { recipesSagaWatcher } from "./recipes/recipes.saga";
import { rehydrationCompleteAction } from "./recipes/recipes.action";

function* initialFetchData(): any {
    const storageRecipes = yield select(localStorageRecipesSelector);

    if(storageRecipes.length === 0) {
        yield put(fetchRandomRecipesThunk({ numberToFetch: 10} ) as any);
    }
}

export function* rootSaga() {
    yield all([call(navigationSagaWatcher), call(authSagaWatcher), call(recipesSagaWatcher), takeLatest(rehydrationCompleteAction, initialFetchData)]);
}