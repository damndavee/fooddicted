import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BottomNavigation } from "../components/BottomNavigation";

import Header from "../components/Header";

import HomeScreen from "../../screens/dashboard/Home";
import ShoppingScreen from "../../screens/dashboard/Shopping";
import WeekPlanScreen from "../../screens/dashboard/WeekPlan";
import CookbookScreen from "../../screens/dashboard/Cookbook";
import SettingsScreen from "../../screens/dashboard/Settings";

import withHomeScreen from "../../hoc/withHome";

const BottomTab = createBottomTabNavigator();

const EnhancedHomeScreen = withHomeScreen(HomeScreen);

export function BottomTabNavigation() {
    return (
        <BottomTab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{
            header: Header
        }}>
            <BottomTab.Screen name="Home" component={EnhancedHomeScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="home-sharp" color={color} size={size} />,
                title: "Home"
            }} />
            <BottomTab.Screen name="ShoppingList" component={ShoppingScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="cart-sharp" color={color} size={size} />,
                title: "Shopping"
            }} />
            <BottomTab.Screen name="WeekPlan" component={WeekPlanScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="calendar-sharp" color={color} size={size} />,
                title: "Week Plan"
            }} />
            <BottomTab.Screen name="Cookbook" component={CookbookScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="book-sharp" color={color} size={size} />,
                title: "Cookbook"
            }} />
            <BottomTab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="settings-sharp" color={color} size={size} />,
                title: "Settings"
            }} />
        </BottomTab.Navigator>
    )
}