import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/Home";
import Header from "../components/Header";

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigation() {
    return (
        <BottomTab.Navigator screenOptions={{
            header: Header
        }}>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="home-sharp" color={color} size={size} />,
                title: "Home"
            }} />
            <BottomTab.Screen name="ShoppingList" component={HomeScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="cart-sharp" color={color} size={size} />,
                title: "Shopping List"
            }} />
            <BottomTab.Screen name="WeekPlan" component={HomeScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="calendar-sharp" color={color} size={size} />,
                title: "Week Plan"
            }} />
            <BottomTab.Screen name="Cookbook" component={HomeScreen} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="book-sharp" color={color} size={size} />,
                title: "Cookbook"
            }} />
        </BottomTab.Navigator>
    )
}