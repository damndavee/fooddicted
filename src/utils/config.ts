import axios from "axios";

// TODO: add more constants for more db instaces

export const DB_NODES = {
    USERS: "users.json",
}

export const AUTH_KEY = "AIzaSyCwFq9-mLLhVORK9a0XY6Ib-YhRq8qsqmk";

export const fooddictedAPI = axios.create({
    baseURL: "https://fooddicted-807b4-default-rtdb.europe-west1.firebasedatabase.app/",
});