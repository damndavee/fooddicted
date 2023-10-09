import { createAsyncThunk } from "@reduxjs/toolkit";

import { RecipeService } from "../../services/recipes.service";
import { RandomRecipeParams } from "./recipes.type";

export const fetchRandomRecipesThunk = createAsyncThunk('recipes/FETCH_RANDOM_RECIPES', ({ numberToFetch, tags }: RandomRecipeParams) => RecipeService.fetchRandomRecipes({numberToFetch, tags}));
export const getRecipeByQueryThunk = createAsyncThunk('recipe/GET_RECIPE_BY_QUERY', (query: string) => RecipeService.fetchRecipeByQuery(query));