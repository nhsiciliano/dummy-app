import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const FavoriteProducts = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>$ {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FavoriteProducts;

const styles = StyleSheet.create({
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
});
