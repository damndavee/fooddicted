import { RootState } from "../store";

export const isLoadingSelector = (state: RootState) => state.recipes.isLoading;
export const localStorageRecipesSelector = (state: RootState) => state.recipes.localStorageRecipes;