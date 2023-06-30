import { ComponentType } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack"

import { NavigationScreens } from "../navigation/screens";
import { RootStackParamList } from "../navigation/stack/type";
import { FORM_TYPE_OBJECT } from "../utils/consts";

type FormType = "signin" | "signup";

export type WelcomeScreenProps = {
    onGoToAuth: (id: string) => void;
    onGoToReadAbout: () => void;
}

export type AuthScreenProps = {
    currentRoute: string;
    texts: any;
}

export type WithMainScreenProps = WelcomeScreenProps | AuthScreenProps | (WelcomeScreenProps & AuthScreenProps);

const withMainScreen = <T extends WithMainScreenProps>(DumbComponent: ComponentType<T>) => () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList>>();

    const CURRENT_ROUTE = route?.params?.id || "signin";

    
    const handleGoToAuth = (id: string) => navigation.navigate(NavigationScreens.Auth, { id });
    // const handleGoToReadAbout = () => navigation.navigate(NavigationScreens.ReadAbout);
    const handleGoToReadAbout = () => navigation.navigate(NavigationScreens.Dashboard);

    const properties = {
        onGoToAuth: handleGoToAuth,
        onGoToReadAbout: handleGoToReadAbout,
        currentRoute: CURRENT_ROUTE,
        texts: FORM_TYPE_OBJECT[CURRENT_ROUTE as FormType]
    } as T;

    return (
        <DumbComponent
            {...properties}
        />
    )
}

export default withMainScreen;