import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/Home";
import Header from "../components/Header";
import { BottomNavigation } from "../components/BottomNavigation";
import ShoppingScreen from "../../screens/dashboard/Shopping";
import WeekPlanScreen from "../../screens/dashboard/WeekPlan";
import CookbookScreen from "../../screens/dashboard/Cookbook";
import SettingsScreen from "../../screens/dashboard/Settings";

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigation() {
    return (
        <BottomTab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{
            header: Header
        }}>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{
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