import { ComponentType } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

import { NavigationScreens } from "../navigation/screens";
import { RootStackParamList } from "../navigation/stack/type";
import { FORM_TYPE_OBJECT } from "../utils/consts";
import { versions } from "../utils/versions.json";
import { useAppDispatch } from "../store/store";
import { navigateAction } from "../store/navigation/navigation.action";

type FormType = "signin" | "signup";

export type WelcomeScreenProps = {
    onGoToAuth: (id: string) => void;
    onGoToReadAbout: () => void;
}

export type AuthScreenProps = {
    currentRoute: string;
    texts: any;
}

export type ReadAboutScreenProps = {
    versions: any[]
}

export type WithMainScreenProps = ReadAboutScreenProps | WelcomeScreenProps | AuthScreenProps | (WelcomeScreenProps & AuthScreenProps & ReadAboutScreenProps);

const withMainScreen = <T extends WithMainScreenProps>(DumbComponent: ComponentType<T>) => () => {
    const dispatch = useAppDispatch();
    
    const route = useRoute<RouteProp<RootStackParamList>>();

    const CURRENT_ROUTE = route?.params?.id || "signin";

    const handleGoToAuth = (id: string) => {
        dispatch(navigateAction({
            screen: NavigationScreens.Auth, 
            params: { id }
        }));
    }

    const handleGoToReadAbout = () => {
        dispatch(navigateAction({
            screen: NavigationScreens.ReadAbout,
        }))
    }

    const properties = {
        onGoToAuth: handleGoToAuth,
        onGoToReadAbout: handleGoToReadAbout,
        currentRoute: CURRENT_ROUTE,
        texts: FORM_TYPE_OBJECT[CURRENT_ROUTE as FormType],
        versions: versions
    } as T;

    return (
        <DumbComponent
            {...properties}
        />
    )
}

export default withMainScreen;