import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.btn,
                ...props.style,
            }}
            onPress={props.onPress}    
        >
            <Text
                style={{
                    ...styles.btnText,
                }}    
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        margin: 18,
        marginVertical: 2,
        borderRadius: 4,
        backgroundColor: "#324A5F",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#1B2A41",
        borderWidth: 2,
    },
    btnText: {
        fontSize: 18,
        color: "white",
    }
})