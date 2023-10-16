export type RawRecipeType = {
    id: string;
    title: string;
    image: string;
    imageType: string;
};

export type RandomRecipeParams = {
    numberToFetch: number;
    tags?: string[];
}

type StepComponentPart = {
    id: number;
    image: string;
    localizedName: string;
    name: string;
}

type RecipeSteps = {
    equipment: StepComponentPart[],
    ingredients: StepComponentPart[]
}

type AnalyzedInstructions = {
    name: string;
    steps: RecipeSteps[]
}

type MeasureTypes = 'metric' | 'us'; 

type Measure = {
    amount: number;
    unitLong: string;
    unitShort: string;
}

type Measures = Record<MeasureTypes, Measure>;

type ExtendedIngredients = {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: Measures,
    meta: string[],
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    unit: string;
}

export type DetailedRecipeType = {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredients[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstructions[];
    originalId: null;
    spoonacularSourceUrl: string;
    rating: string;
}