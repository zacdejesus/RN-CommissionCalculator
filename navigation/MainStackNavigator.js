import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Commissions from '../screens/Commissions'
import Home from '../screens/Home'
import MarketRates from '../screens/MarketRates'


const Stack = createNativeStackNavigator()

export default MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Commissions'
                    component={Commissions}
                    options={{ title: 'Commissions' }}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name='MarketRates'
                    component={MarketRates}
                    options={{ title: 'market Rates' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

