import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Product from '../components/Product';
import { useSelector } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeProduct } from '../redux/favoritesReducer';

const CartProducts = ({ navigation }) => {

    const dispatch = useDispatch();
    const carting = useSelector((state) => state.carting);

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
                <Text style={styles.title}>Productos comprados</Text>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(
                            removeProduct()
                        )
                    }}
                >
                    <Ionicons name="remove-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {carting.length >= 1 ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.productsList}
                    contentContainerStyle={styles.productsListContainer}
                    data={carting}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProduct}
                /> :
                <SafeAreaView>
                    <Text style={styles.titleOut}>No tienes productos marcados como comprados</Text>
                </SafeAreaView>
            }
        </SafeAreaView>
    )
}

export default CartProducts

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
        opacity: 0.5,
    },
    productsListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 4,
        marginHorizontal: 12,
    },
})