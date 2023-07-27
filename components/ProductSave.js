import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/favoritesReducer";

const ProductSave = ({ title, price, thumbnail }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.card}>
            <Image style={styles.thumb} source={{ uri: thumbnail }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
            <TouchableOpacity 
                style={styles.feather}
                onPress={() => {
                    dispatch(
                        removeItem(item.id)
                    )
                }}
                >
                <Feather name="trash-2" size={24} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ProductSave

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
    feather: {
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 10,
    }
})