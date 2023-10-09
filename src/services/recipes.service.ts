import { spoonacularAPI } from "../utils/config";

import { RawRecipeType, RandomRecipeParams, DetailedRecipeType } from "../store/recipes/recipes.type";

export class RecipeService {
    static async fetchRecipeByQuery(query: string): Promise<RawRecipeType[]> {
        const {data} = await spoonacularAPI.get(`/complexSearch?query=${query}&number=10`);

        return data.results.map((item: any) => ({...item, isFavorite: false, isSaved: false, isSelected: false}));
    }

    static async fetchRecipeByCustomProperty(queryData: {type: string, query: string[]}): Promise<RawRecipeType[]> {
        const parsedQuery = queryData.query.map(q => q.toLowerCase()).join(",");

        const {data} = await spoonacularAPI.get(`/complexSearch?${queryData.type.toLowerCase()}=${parsedQuery}&number=50`);

        return data.results.map((item: any) => ({...item, isFavorite: false, isSaved: false, isSelected: false}));
    }

    static async fetchRecipeDetails(id: number): Promise<any> {
        const {data} = await spoonacularAPI.get(`/${id}/information?includeNutrition=false`);

        return data;
    }

    static async fetchAllRecipesDetails(idArray: number[]): Promise<any[]> {
        const parsedIds = idArray.join(",");

        const {data} = await spoonacularAPI.get(`/informationBulk?ids=${parsedIds}`);

        return data;
    }

    static async fetchRandomRecipes({ numberToFetch, tags }: RandomRecipeParams): Promise<DetailedRecipeType[]> {
        const parsedTags = tags ? tags.join(",") : "";

        const { data } = await spoonacularAPI.get(`/random?number=${numberToFetch}&tags=${parsedTags}`);

        return data.recipes;
    }
}