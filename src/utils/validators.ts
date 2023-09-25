import { Form, Fields, Validators, ValidationResults } from "../store/auth/auth.type";

export function isEmpty(valueToCheck: string) {
    return valueToCheck.trim().length === 0 && "Field cannot be empty.";
}

export function validateExistance(valueToCheck: string, values: string[]) {
    return values.indexOf(valueToCheck) > -1 && "That name already exists";
}
  
export function validateEmail(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;
    return !emailRegex.test(email) && "Invalid email format.";
}
  
export function validatePassword(password: string, confirmPassword: string) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;':",./<>?\\-])[0-9a-zA-Z!@#$%^&*()_+[\]{}|;':",./<>?\\-]{8,}$/;
    
    if(password !== confirmPassword) {
        return "Passwords don't match."
    }

    if (password.length < 7 || confirmPassword.length < 7 ) {
        return "Password should be at least 8 characters long.";
    }

    if(!passwordRegex.test(password)) {
        return "Password should contains at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    return;
}

export function authFormValidation(userData: Form, validators: Validators): ValidationResults {
    return Object.entries(userData).reduce((results, [key, {value, formType}]) => {
        const fieldValidators = validators[key as Fields];
        const errors = fieldValidators.map(([validator, meta]) => {
            return validator(value, meta);
        }).filter(result => !!result && result as string);

        return {
            ...results,
            [key]: {
                isValid: errors.length === 0,
                errors
            }
        };
    }, {});
}