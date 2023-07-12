import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../redux/store";
import { getProduct } from "../services/ProductsService.js";

const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={handleAddToFavorites} title="Add to Favorites" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
