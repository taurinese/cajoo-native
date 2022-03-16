import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 25,
        backgroundColor: 'white',
    },
    cajoo: {
        width: '90%',
        height: 140
    },
    cajooText: {
        fontWeight: "900",
        fontSize: 20
    },
    bottomButtons: {
        position: 'absolute',
        bottom: 50,
        width: "100%",
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: "#ff3537",
        width: "80%",
        alignItems: "center",
        paddingVertical: 10,
        // paddingHorizontal: 20
        borderRadius: 10,
        marginBottom: 20
    },
    loginButtonText: {
        fontWeight: "800",
        color: "#FFF",
        fontSize: 18
    },
    discoverButtonText: {
        color: "#ff3537",
        textDecorationLine: 'underline',
        fontSize: 12,
        fontWeight: "500"
    },

});

export default styles;