import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/HomeScreen';
import Login from '../screens/Login';
import { Register } from '../screens/Register';
import Wiki from '../screens/Wiki';
import theme from "../global/styles/theme";
import { useAuth, AuthProvider } from "../contexts/authContext";


const AuthenticateStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <AuthenticateStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.colors.primary_light,
                },
                headerTitleStyle: {
                    color: theme.colors.on_background,
                    fontFamily: theme.fonts.medium,
                },
            }}
        >
            <AuthenticateStack.Screen name="Home" component={Home} />
            <AuthenticateStack.Screen name="Login" component={Login} />
            <AuthenticateStack.Screen name="Register" component={Register} options={{ title: "Cadastro", headerShown: true }} />
            <AuthenticateStack.Screen name="Wiki" component={Wiki} />
        </AuthenticateStack.Navigator>
    )
}
const AppRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.colors.primary_light,
                },
                headerTitleStyle: {
                    color: theme.colors.on_background,
                    fontFamily: theme.fonts.medium,
                },
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} options={{ title: "Cadastro", headerShown: true }} />
            <AuthenticateStack.Screen name="Wiki" component={Wiki} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    const { authenticated } = useAuth();

    return (
        <NavigationContainer>
            <AuthProvider>
                {authenticated ? <AuthRoutes /> : <AppRoutes />}
            </AuthProvider>
        </NavigationContainer>
    );
}