import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    mainText: {
        fontWeight: "900",
        fontSize: 18,
        marginBottom: 15
    },
    text: {
        fontWeight: "600",
        marginVertical: 15
    },
    redText: {
        color: "#ff3537",
        textDecorationLine: "underline"
    },
    inputs: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%"
    },
    input: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: "lightgray",
        fontSize: 30,
        textAlign: "center"
    }
});

export default styles;