import axios from "axios";

// TODO: add more constants for more db instaces
export const DB_NODES = {
    USERS: "users.json",
    RECIPES: "recipes.json",
}

export const AUTH_KEY = "AIzaSyCwFq9-mLLhVORK9a0XY6Ib-YhRq8qsqmk";

export const fooddictedAPI = axios.create({
    baseURL: "https://fooddicted-807b4-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const spoonacularAPI = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    headers: {
        "x-api-key": "0948c006d32243be9d70c19501e5221c"
    }
});

spoonacularAPI.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        // there will be an error handled by axios
        return Promise.reject(error);
    }
)