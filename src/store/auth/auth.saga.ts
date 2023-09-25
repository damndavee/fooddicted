import { takeEvery, put, race, take, select, all, call } from "redux-saga/effects";

import { authenticateUserAction, signInUserAction } from "./auth.action";
import { extractedUsersData } from "./auth.selector";
import { authFormValidation, isEmpty, validateEmail, validateExistance, validatePassword } from "../../utils/validators";
import { ValidationResults, Validators } from "./auth.type";
import { setValidators } from "./auth.reducer";
import { createUserWithAdditionalDataThunk, getAllUsersThunk, signInUserThunk, signUpUserThunk } from "./auth.thunk";
import useEnhancedNavigation from "../../hooks/useEnhancedNavigation";
import { NavigationScreens } from "../../navigation/screens";

export function* authenticateUser({payload}: any): any {
    const { userData, isSignUpForm } = payload;

    yield put(getAllUsersThunk() as any);
    const users = yield select(extractedUsersData);
    const userEmails = users('email');
    const userNicknames = users('nickname');

    const validators: Validators = {
        email: [
            [isEmpty, {}],
            [validateExistance, userEmails],
            [validateEmail, {}],
        ],
        nickname: [
            [isEmpty, {}],
            [validateExistance, userNicknames],
        ],
        password: [
            [isEmpty, {}],
            [validatePassword, userData.confirmPassword?.value || ""],
        ],
        confirmPassword: [
            [isEmpty, {}],
            [validatePassword, userData.confirmPassword?.value || ""],
        ]
    } 

    const validationResults: ValidationResults = yield authFormValidation(userData, validators);
    
    if(Object.entries(validationResults).some(([key, value]) => !value.isValid)) {
        yield put(setValidators(validationResults));
        return;
    }

    if(isSignUpForm) {
        yield call(createUserWithAdditionalData, {...userData, id: users.length + 1});
    } else {
        yield call(signInUser, userData);
    }
}

function* signInUser(user: any): any {
    const { _pop, _replace } = yield call(useEnhancedNavigation);
    yield put(signInUserThunk({email: user.email, password: user.password}) as any);

    yield _pop();
    yield _replace(NavigationScreens.Dashboard);
}

function* createUserWithAdditionalData(user: any): any {
    yield put(createUserWithAdditionalDataThunk({
        email: user.email.value,
        id: user.id,
        password: user.email.value,
        nickname: user.nickname.value
    }) as any);

    yield put(signUpUserThunk({email: user.email.value, password: user.password.value}) as any);

    const [successAction, rejectedAction] = yield race([take(signUpUserThunk.fulfilled), take(signUpUserThunk.rejected)]);

    if(successAction) {
        yield call(signInUser, {email: user.email.value, password: user.password.value});
    }
}

export function* authSagaWatcher() {
    yield takeEvery(authenticateUserAction, authenticateUser);
    yield takeEvery(signInUserAction, signInUser);
}