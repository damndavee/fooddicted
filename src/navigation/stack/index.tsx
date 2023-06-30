import { ComponentType } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigation } from "../bottomTab";

import WelcomeScreen from "../../screens/Welcome";
import AuthScreen from "../../screens/Auth";
import DashboardScreen from "../../screens/Dashboard";
import withMainScreen, { WelcomeScreenProps, AuthScreenProps } from "../../hoc/withMain";

const Stack = createNativeStackNavigator();

const EnhancedWelcomeScreen = withMainScreen<WelcomeScreenProps>(WelcomeScreen);
const EnhancedAuthScreen = withMainScreen<AuthScreenProps>(AuthScreen);

export function RootStacNotAuthenticatedkNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={EnhancedWelcomeScreen} options={{
                title: "Welcome",
                headerShown: false
            }} />
            <Stack.Screen name="Auth" component={EnhancedAuthScreen} options={{
                title: "Authentication",
            }} />
            
            <Stack.Screen name="ReadAbout" component={DashboardScreen} options={{
                title: "Read About",
            }} />
        </Stack.Navigator>
    )
}

export function RootStackAuthenticatedNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={BottomTabNavigation} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}