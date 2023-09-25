import { useState } from "react";
import { Form } from "../store/auth/auth.type";
import { useAppDispatch, useAppSelector } from "../store/store";
import { authenticateUserAction } from "../store/auth/auth.action";
import { validatorsSelector } from "../store/auth/auth.selector";

const useForm = (isSignUpForm: boolean) => {
    const dispatch = useAppDispatch();
    const validators = useAppSelector(validatorsSelector);

    const [userData, setUserData] = useState<Form>({
        nickname: {
            formType: ['signup'],
            value: "",
        },
        email: {
            formType: ['signup', 'signin'],
            value: "",
        },
        password: {
            formType: ['signup', 'signin'],
            value: "",
        },
        confirmPassword: {
            formType: ['signup'],
            value: "",
        },
    });

    const handleChange = (id: string, enteredValue: string | number | boolean): void => {        
        setUserData((prevState: Form) => ({
            ...prevState,
            [id]: {
                ...prevState[id as keyof Form],
                value: enteredValue
            }
        }))
    }

    const getFieldValidation = (id: string) => {
        if(Object.keys(validators).length === 0) {
            return {
                isValid: true, 
                errors: []
            }
        }
        
        return validators[id];
    }

    const handleSubmit = () => {
        const data =  Object.entries(userData).map(([id, value]) => ({id, ...value }))
        .filter(data => !isSignUpForm ? data.formType.includes('signin') : data)
        .reduce((obj: any, key: any) => {
            obj[key.id] = userData[key.id as keyof typeof userData];
            return obj;
        }, {});

        dispatch(authenticateUserAction({userData: data, isSignUpForm}));
    }

    return {
        userData,
        getFieldValidation,
        handleChange,
        handleSubmit
    }
}

export default useForm;