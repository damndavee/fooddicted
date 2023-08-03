import axios from "axios";

import { fooddictedAPI, AUTH_KEY, DB_NODES } from "../utils/config";
import { AuthUser, FirebaseResponse, UserData } from "../store/auth/auth.type";

export class FooddictedService {
    static async authenticateUser(credentials: {email: string, password: string}, mode: string): Promise<FirebaseResponse> {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${AUTH_KEY}`, {
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true
        });

        return response.data;
    }

    static async createUserWithAdditionalData(user: AuthUser): Promise<any> {
        const response = await fooddictedAPI.post(DB_NODES.USERS, {
            email: user.email,
            nickname: user.nickname,
            id: user.id
        });

        return response;
    }

    static async getAllUsers(): Promise<UserData[]> {
        const response = await fooddictedAPI.get(DB_NODES.USERS);

        const fetchedUsers: UserData[] = [];

        for (const key in response.data) {
            const userObj: UserData = {
                id: key,
                nickname: response.data[key].nickname,
                email: response.data[key].email,
            }

            fetchedUsers.push(userObj);
        }

        return fetchedUsers;
    }
}