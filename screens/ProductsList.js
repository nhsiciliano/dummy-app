import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from "../components/Product";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ProductsList = ({ navigation }) => {
  const route = useRoute();
  function renderProduct({ item: product }) {
    return (
      <>
        <Product
          {...product}
          onPress={() => {
            navigation.navigate("ProductDetails", {
              productId: product.id,
            });
          }}
        />
      </>
    );
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        axios.get('https://dummyjson.com/products?limit=20&skip=1&')
          .then((json) => setData(json.data.products))
          .finally(() => setLoading(false));
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome5 name="arrow-alt-circle-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titles}>Lista de Productos</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("FavoriteProducts");
        }}>
          <MaterialIcons name="favorite" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 18,
  },
  titles: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 8,
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
