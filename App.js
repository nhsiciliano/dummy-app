import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { FavoriteProducts } from "./screens/FavoriteProducts.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FavoriteProducts"
            component={FavoriteProducts}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
