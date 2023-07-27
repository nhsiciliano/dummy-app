import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToFavorites, addToCart } from '../redux/favoritesReducer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message'


const { width } = Dimensions.get("window");
const height = width * 0.85;

const ProductDetails = ({ route, navigation }) => {

  const dispatch = useDispatch();
  const { productId } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const showToast = (message) => {
    Toast.show({
      type: 'success',
      text1: message,
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/${productId}`)
          .then((json) => setData(json.data))
          .finally(() => setLoading(false));
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [])

  const imgUrls = data.images;

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Products");
          }}>
            <FontAwesome5 name="arrow-alt-circle-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>{data.title}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                addToFavorites({
                  id: data.id,
                  thumbnail: data.thumbnail,
                  title: data.title,
                  price: data.price,
                })
              );
              showToast('Este producto fue agregado a favoritos');
            }}
          >
            <MaterialIcons name="favorite-border" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={18}
          showsHorizontalScrollIndicator={false}
          style={{ width, height, marginVertical: 22 }}>
          {imgUrls?.map((item, index) => (
            <Image style={{ width, height, resizeMode: "cover" }} key={index} source={{ uri: item }} />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {imgUrls?.map((item, index) => (
            <Text key={index} style={styles.dot}>⬤</Text>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>$ {data.price}</Text>
          <Text style={styles.info}>Brand: {data.brand}</Text>
          <Text style={styles.info}>Category: {data.category}</Text>
          <Text style={styles.info}>Rating: {data.rating}</Text>
          <Text style={styles.info}>Stock: {data.stock}</Text>
          <Text style={styles.description}>Description: {data.description}</Text>
        </View>  
        <TouchableOpacity
            style={styles.cartIcon}
            onPress={() => {
              dispatch(
                addToCart({
                  id: data.id,
                  thumbnail: data.thumbnail,
                  title: data.title,
                  price: data.price,
                })
              );
              showToast('Este producto fue marcado como comprado');
            }}
          >
            <AntDesign name="shoppingcart" size={28} color="black" />
          </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 18,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  info: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
    color: "#324B4A",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#324B4A",
    marginVertical: 10,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 300,
    alignSelf: "center",
    margin: 2,
  },
  dot: {
    fontSize: 12,
    color: "#888",
    marginHorizontal: 2,
  },
  cartIcon: {
    left: 340,
    bottom: 245,
  }
});
