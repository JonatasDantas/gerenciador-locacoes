import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/home/home';

import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import Rentals from './../views/rentals/rentals';
import Clients from './../views/clients/clients';
import InventoryStack from './../views/inventory/index';

export default function TabsNavigator() {
    const Tab = createBottomTabNavigator();
    const tabsIcons = [
        { route: "Home", icon: "home" },
        { route: "Estoque", icon: "clipboard" },
        { route: "Novo", icon: "plus" },
        { route: "Locações", icon: "bar-chart" },
        { route: "Clientes", icon: "users" },
    ]

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconTabRound: {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 6,
            shadowColor: '#36D1DC',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        }
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => <Icon name={tabsIcons.find((e) => e.route == route.name).icon} size={size} color={color} />
                })}
                tabBarOptions={{
                    activeTintColor: '#0052D4',
                    inactiveTintColor: '#777',
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Estoque" component={InventoryStack} />
                <Tab.Screen name="Novo" component={Home} options={() => ({
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#6FB1FC', '#0052D4']}>
                                <Icon name="plus" size={26} color='#FFF' />
                            </LinearGradient>
                        </View>
                    ),
                    tabBarLabel: ""
                })} />
                <Tab.Screen name="Locações" component={Rentals} />
                <Tab.Screen name="Clientes" component={Clients} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}