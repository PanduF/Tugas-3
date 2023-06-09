import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './Detail';
import Home from './Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home1"}
            screenOptions={{
                headerShown: true,
                headerTitleAlign:'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#88b454',
                    
                },
            }}
        >
            <Stack.Screen
                name="Home1"
                component={Home}
                options={{
                    title: "Jalan Kuy.id",
                    headerLeft: () => <FontAwesome name="bars" size={24} color="white" />,
                    headerRight: () => <FontAwesome name="user-alt" size={24} color="white" />,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: "Jalan Kuy.id",
                    headerRight: () => <FontAwesome name="user-alt" size={24} color="white" />,
                }}
            />  

        </Stack.Navigator>
    );
};

export default ScreenStack;