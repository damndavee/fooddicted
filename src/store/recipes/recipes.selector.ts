import { createSelector } from "reselect";
import { RootState } from "../store";

export const isLoadingSelector = (state: RootState) => state.recipes.isLoading;
export const localStorageRecipesSelector = (state: RootState) => state.recipes.localStorageRecipes;

export const carouselRecipesSelector = createSelector(
    [localStorageRecipesSelector],
    (recipes) => recipes.slice(0, 7)
);

export const dishTypesSelector = createSelector(
    [localStorageRecipesSelector],
    (recipes) => {
        const dishTypes = recipes.map(recipe => recipe.dishTypes?.length !== 0 ? recipe.dishTypes : ['other']);
        const dishTypesSet = new Set(dishTypes);

        return Array.from(dishTypesSet);
    }
);

export const cuisineSelector = createSelector(
    [localStorageRecipesSelector], 
    (recipes) => {
        const cuisines = recipes.map(recipe => recipe.cuisines).flat();
        const cuisineSet = new Set(cuisines);

        return Array.from(cuisineSet);
    }
);


export const bestRatedRecipesSelector = createSelector(
    [localStorageRecipesSelector],
    (recipes) => {
        return recipes.sort((a,b) => (Number(a.rating) < Number(b.rating)) ? 1 : ((Number(b.rating) < Number(a.rating)) ? -1 : 0)).slice(0, 10);
    }
)


export const mostRecentRecipesSelector = createSelector(
    [localStorageRecipesSelector],
    (recipes) => {
        return recipes.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 10);
    }
)