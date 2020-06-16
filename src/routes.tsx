import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';
import Form from './screens/Form';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
