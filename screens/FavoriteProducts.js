import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeAll, removeItem } from '../redux/favoritesReducer';
import Product from "../components/Product";
import Button from "../components/Button";

const FavoriteProducts = ({ navigation }) => {

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function renderProduct({ item: product }) {
    return (
      <View>
        <Product
          {...product}
          onPress={() => {
            navigation.navigate("ProductDetails", {
              productId: product.id,
            });
          }}
        />
        <Button
          title="REMOVE ITEM"
          onPress={() => {
            dispatch(
              removeItem(product.id)
            )
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Products")
        }}>
          <FontAwesome5 name="arrow-alt-circle-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Favoritos</Text>
        <TouchableOpacity onPress={() => {
          dispatch(
            removeAll()
          )
        }}>
          <Ionicons name="remove-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {favorites.length >= 1 ?
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderProduct}
        /> :
        <SafeAreaView>
          <Text style={styles.titleOut}>No tienes elementos en favoritos</Text>
        </SafeAreaView>
      }
    </SafeAreaView>
  );
};

export default FavoriteProducts;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleOut: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 290,
  },
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 4,
    marginHorizontal: 12,
  },
});
