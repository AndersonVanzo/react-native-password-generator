import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes";

export const App = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};
