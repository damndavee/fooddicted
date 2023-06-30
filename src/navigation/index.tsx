import { NavigationContainer } from "@react-navigation/native";
import { RootStacNotAuthenticatedkNavigation, RootStackAuthenticatedNavigation } from "./stack";

export function Navigation() {
    return (
        <>
            <NavigationContainer>
                <RootStackAuthenticatedNavigation />
            </NavigationContainer>
        </>
    )
}