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
    france: {
        width: 20,
        height: 20,
    },
    down: {
        width:10,
        height: 10,
        marginLeft: 5
    },
    mainText: {
        fontWeight: "900",
        fontSize: 20,
        marginBottom: 10
    },
    secondaryText: {
        fontWeight: "500",
        marginBottom: 20
    },
    input: {
        width: "90%",
        backgroundColor: "lightgray",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    prefixNumber: {
        fontWeight: "800",
        marginLeft: 10,
        // color: "dark"
    },
    validateBtn: {
        width: "90%",
        backgroundColor: "#ff3537",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20
    },
    validateBtnDisabled: {
        width: "90%",
        backgroundColor: "#ff9a9b",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20
    },
    bottomDiv: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 50
    },
    // bottomDivFocused: {
    //     width: "100%",
    //     alignItems: "center",
    //     position: "absolute",
    //     bottom: 50,
    //     marginBottom: 50
    // },
    bottomText: {
        width: "90%",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
    },
    redText: {
        color: "#ff3537",
        textDecorationLine: "underline"
    },
    whiteText: {
        color: "#FFF",
        fontWeight: "800",
        fontSize: 16
    },
    textInput: {
        width: "100%"
    }
});

export default styles;