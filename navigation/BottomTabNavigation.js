import { StyleSheet, View, Platform } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductsList from '../screens/ProductsList';
import FavoriteProducts from '../screens/FavoriteProducts';
import CartProducts from '../screens/CartProducts';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 80,
        background: "white",
    }
}


const BottomTabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='CartProducts'
                component={CartProducts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name='md-cart'
                                size={24}
                                color={focused ? "black" : "#324A5F"}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Products'
                component={ProductsList}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "white",
                                height: Platform.OS == 'ios' ? 50 : 60,
                                width: Platform.OS == 'ios' ? 50 : 60,
                                top: Platform.OS == 'ios' ? -10 : -20,
                                borderRadius: Platform.OS == 'ios' ? 25 : 30,
                                borderWidth: 2,
                                borderColor: "#324A5F"
                            }}>
                                < MaterialCommunityIcons
                                    name='home-circle'
                                    size={24}
                                    color="black"
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name='FavoriteProducts'
                component={FavoriteProducts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MaterialIcons
                                name='favorite'
                                size={24}
                                color={focused ? "black" : "#324A5F"}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
