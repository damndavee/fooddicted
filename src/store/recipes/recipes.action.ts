import { createAction } from "redux-actions";
import { RandomRecipeParams } from "./recipes.type";


export const fetchRandomRecipesAction = createAction('recipes/FETCH_RANDOM_RECIPES');
export const rehydrationCompleteAction = createAction('custom/REHYDRATION');
