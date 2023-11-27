import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigation } from "../bottomTab";

import WelcomeScreen from "../../screens/main/Welcome";
import AuthScreen from "../../screens/main/Auth";

import withMainScreen, { WelcomeScreenProps, AuthScreenProps } from "../../hoc/withMain";
import SearchRecipesScreen from "../../screens/SearchRecipes";
import AddRecipeScreen from "../../screens/AddRecipe";
import ProfileScreen from "../../screens/Profile";

const Stack = createNativeStackNavigator();

const EnhancedWelcomeScreen = withMainScreen<WelcomeScreenProps>(WelcomeScreen);
const EnhancedAuthScreen = withMainScreen<AuthScreenProps>(AuthScreen);

export function RootStacNotAuthenticatedkNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerBackButtonMenuEnabled: true}}>
            <Stack.Screen name="Welcome" component={EnhancedWelcomeScreen} options={{
                title: "Welcome",
                headerShown: false
            }} />
            <Stack.Screen name="Auth" component={EnhancedAuthScreen} options={{
                title: "Authentication",
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
            <Stack.Screen name="SearchRecipes" component={SearchRecipesScreen} />
            <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}