import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeController } from "../screens/Home/HomeController";
import { PasswordsController } from "../screens/Passwords/PasswordsController";

const Tabs = createBottomTabNavigator();

export const Routes = () => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tabs.Screen
                name={"Home"}
                component={HomeController}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon name={"home"} color={color} size={size} />;
                        }
                        return <Icon name={"home-outline"} color={color} size={size} />;
                    },
                }}
            />
            <Tabs.Screen
                name={"Passwords"}
                component={PasswordsController}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Icon name={"lock-closed"} color={color} size={size} />;
                        }
                        return <Icon name={"lock-closed-outline"} color={color} size={size} />;
                    },
                }}
            />
        </Tabs.Navigator>
    );
};
