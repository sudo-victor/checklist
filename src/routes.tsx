import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';
import Settings from './screens/Settings';
import Theme from './screens/Theme';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Theme" component={Theme} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
