import { takeEvery, put, race, take, select, all, call } from "redux-saga/effects";
import { navigateAction, popAndReplaceScreenAction } from "./navigation.action";
import { NavigationService } from "../../services/navigation.service";
import { previousRouteSelector } from "./navigation.selector";
import { setPreviousRoute } from "./navigation.reducer";
import { NavigationScreens } from "../../navigation/screens";
import { setValidators } from "../auth/auth.reducer";
import { RootStackParamList } from "../../navigation/stack/type";
import { isUserAuthenticatedSelector } from "../auth/auth.selector";


function* navigate(action: any): any {
    const screen = action.payload.screen;
    const params = action.payload.params;

    const previousRoute = yield select(previousRouteSelector);

    if(!previousRoute) {
        yield put(setPreviousRoute(screen));
    }

    if(previousRoute === NavigationScreens.Auth) {
        yield put(setValidators({}));
    }

    yield NavigationService.navigate(screen, params);
}

function* popAndReplace(action: any): any {
    const isAuthenticated = yield select(isUserAuthenticatedSelector);

    if(isAuthenticated) {
        yield NavigationService.navigate(NavigationScreens[action.payload.screen as keyof RootStackParamList]);
        yield NavigationService.pop();
    }
}

export function* navigationSagaWatcher() {
    yield takeEvery(navigateAction, navigate);
    yield takeEvery(popAndReplaceScreenAction, popAndReplace);
}