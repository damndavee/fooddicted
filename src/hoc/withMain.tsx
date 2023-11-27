import { ComponentType, useLayoutEffect } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/stack/type";
import { FORM_TYPE_OBJECT } from "../utils/consts";
import { useAppDispatch } from "../store/store";
import { capitalizeTitle } from "../utils/functions";
import { FormType } from "../store/auth/auth.type";
import { NavigationService } from "../services/navigation.service";

export type WelcomeScreenProps = {
    onGoToAuth: (id: string) => void;
}

export type AuthScreenProps = {
    currentRoute: string;
    texts: any;
}

export type WithMainScreenProps = WelcomeScreenProps | AuthScreenProps | ( WelcomeScreenProps & AuthScreenProps );

const withMainScreen = <T extends WithMainScreenProps>(DumbComponent: ComponentType<T>) => () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const route = useRoute<RouteProp<RootStackParamList>>();
    const currentRoute = route?.params?.id || "welcome";
    const currentSreen = route.name;

    const isHeaderShown = currentSreen === 'Auth';

    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: capitalizeTitle(currentRoute),
            headerShown: isHeaderShown,
            headerTintColor: '#fff',
            headerTransparent: true,
        })
    }, []);

    const handleGoToAuth = (id: string) => {
        NavigationService.navigate('Auth', { id });
    }

    const properties = {
        onGoToAuth: handleGoToAuth,
        currentRoute: currentRoute,
        texts: FORM_TYPE_OBJECT[currentRoute as FormType],
    } as T; 

    return (
        <DumbComponent
            {...properties}
        />
    )
}

export default withMainScreen;