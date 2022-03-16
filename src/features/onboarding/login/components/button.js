import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[this.props.buttonStyle, styles.button]} onPress={this.props.press}>
                <Image style={styles.img} source={this.props.img} />
                <Text style={[this.props.textStyle, styles.text]}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center'
    },
    button: {
        width: "80%",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15,
        // // backgroundColor: "#ff3537",
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: "row"
    },
    img: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    text: {
        fontWeight: '800'
    },
});


export default Button;