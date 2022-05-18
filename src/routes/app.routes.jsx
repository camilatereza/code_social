import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Checkpoint } from "../screams/Check";
import { Home } from "../screams/Home";
import { Timer } from "../screams/Timer";

import { Styles } from "../global/styles/tabStyle";
import { theme } from "../global/styles/theme";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.button,
                tabBarInactiveTintColor: theme.colors.tabInactive,
                tabBarStyle: Styles.container
            }}
            
        >
            <Tab.Screen
                name='Inicio'
                component={Home}
            //Por padrão é a primeira tela a abrir
            />
            <Tab.Screen
                name='Checkpoint'
                component={Checkpoint}
            />
            <Tab.Screen
                name='Temporizador'
                component={Timer}
            />
        </Tab.Navigator>
    );
}