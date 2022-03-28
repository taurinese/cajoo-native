import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';
import Call from '../features/connect/connect.screen';
import Validate from '../features/validate/validate.screen';
import Home from '../features/home/home.screen';

const Container = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: '#ff3537',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerBackTitle: "",
            headerTitleStyle: {
                fontWeight: '900',
                textAlign: 'center',
                fontSize: 20,
            },
        }}
        >
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="login" component={Login} options={{title: 'Connexion', headerShown: true}} />
        <Stack.Screen name="call" component={Call} options={{title: 'Connexion', headerShown: true}} />
        <Stack.Screen name="validateNumber" component={Validate} options={{title: 'Connexion', headerShown: true}} />
        <Stack.Screen name="connected" component={Home} options={{title: 'Accueil', headerShown: true}} />
        </Stack.Navigator>
        </NavigationContainer>
        );
    }
    
    export default Container;
    