import { View, Platform } from 'react-native'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsList from "./screens/ProductsList.js";
import ProductDetails from "./screens/ProductDetails.js";
import FavoriteProducts from "./screens/FavoriteProducts.js";
import CartProducts from "./screens/CartProducts.js";
import Toast from 'react-native-toast-message'

const Stack = createNativeStackNavigator();
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

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Products'
      headerShown={false}
    >
      <Stack.Screen
        name='Products'
        component={ProductsList}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} initialRouteName="ProductsFeed">
            <Tab.Screen
              name='CartProducts'
              component={CartProducts}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons
                      name='md-cart'
                      size={24}
                      color={focused ? "#6CA2D1" : "black"}
                    />
                  )
                }
              }}
            />
            <Tab.Screen
              name='ProductsFeed'
              component={ProductsNavigation}
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
                      borderColor: focused ? "#6CA2D1" : "black",
                    }}>
                      < MaterialCommunityIcons
                        name='home-circle'
                        size={24}
                        color={focused ? "#6CA2D1" : "black"}
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
                      color={focused ? "#6CA2D1" : "black"}
                    />
                  )
                }
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
}

