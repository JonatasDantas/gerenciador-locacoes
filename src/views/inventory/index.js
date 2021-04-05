import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inventory from './inventory';
import ItemManagement from './../item-management/item-management';

export default function InventoryScreens() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Inventory" component={Inventory}/>
            <Stack.Screen name="ItemManagement" component={ItemManagement}/>
        </Stack.Navigator>
    )
}