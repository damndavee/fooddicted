export type AuthUser = {
    email: string;
    password: string;
    nickname: string;
    id: number | string;
    confirmPassword: string;
}

export type UserData = Pick<AuthUser, "email" | "id" | "nickname">;

export type AuthenticatedUser = {
    id: string;
    token: string;
    isAuthenticated: boolean;
}

export type ResponseKeys = "email" | "expiresIn" | "idToken" | "kind" | "localId" | "refreshToken";
export type FirebaseResponse = Record<ResponseKeys, string>;

export type Fields = 'email' | 'password' | 'nickname' | 'confirmPassword';

export type Validator = (value: string, meta: any) => string | undefined | boolean;
export type Validators = Record<Fields, [Validator, any][]>;
export type ValidationResults = Record<string, {isValid: boolean, errors: string[]}>;