import { createSelector } from "reselect";
import { RootState } from "../store";

export const isLoadingSelector = (state: RootState) => state.recipes.isLoading;
export const localStorageRecipesSelector = (state: RootState) => state.recipes.localStorageRecipes;

export const carouselRecipesSelector = createSelector(
    [localStorageRecipesSelector],
    (recipes) => recipes.slice(0, 7)
)