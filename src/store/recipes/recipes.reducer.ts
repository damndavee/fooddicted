import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomRecipesThunk } from "./recipes.thunk";
import { DetailedRecipeType } from "./recipes.type";

export type SliceState = {
    isLoading: boolean;
    localStorageRecipes: DetailedRecipeType[];
}

export type Reducers = {

}

const slice = createSlice<SliceState, Reducers>({
    name: 'recipesReducer',
    initialState: {
        isLoading: false,
        localStorageRecipes: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRandomRecipesThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchRandomRecipesThunk.rejected, state => {
            // TODO: ERROR IMPLEMENTATION
            state.isLoading = false;
        });
        builder.addCase(fetchRandomRecipesThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.localStorageRecipes = action.payload;
        });
    }
});

export const {} = slice.actions;
export default slice.reducer;