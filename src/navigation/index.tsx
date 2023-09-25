import { NavigationContainer } from "@react-navigation/native";
import { RootStacNotAuthenticatedkNavigation, RootStackAuthenticatedNavigation } from "./stack";
import { NavigationService } from "../services/navigation.service";
import { useAppSelector } from "../store/store";
import { isAuthenticatingSelector, isUserAuthenticatedSelector } from "../store/auth/auth.selector";

export function Navigation() {
    const isAuthenticated = useAppSelector(isUserAuthenticatedSelector);
    // TODO: to be implemented const isLoading = useAppSelector();
    const isAuthenticating = useAppSelector(isAuthenticatingSelector);

    return (
        <>
            {/* {isLoading && console.log("LOADING!@#")} */}
            {isAuthenticating && console.log("AUTHENTICATING!@#!@#")}
            <NavigationContainer ref={NavigationService.navigationRef}>
                {isAuthenticated ? <RootStackAuthenticatedNavigation /> : <RootStacNotAuthenticatedkNavigation />}
            </NavigationContainer>
        </>
    )
}