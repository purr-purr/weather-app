import React from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Loading = () => {
    return (
        <LinearGradient
            colors={['#8EC5FC', '#E0C3FC']}
            style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>Weather Loading...</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: '#2c2c2c',
        fontSize: 24
    }
});

export default Loading;

