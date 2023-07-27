import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Product = ({ title, price, thumbnail, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={{ uri: thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
  },
});
