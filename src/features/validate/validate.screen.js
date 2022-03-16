import React, { Component } from 'react';
import {View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Alert} from 'react-native';

import styles from './validate.styles';

export default class Validate extends Component {

    valid = () => {
        Alert.alert("Validé", "Votre numéro est à présent validé!");
    }

    render() {
        return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.mainText}>Confirmez votre numéro!</Text>
                        <Text style={styles.text}>Entrez le code envoyé au {this.props.route.params.phone}</Text>
                        <View style={styles.inputs}>
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={() => { this.second.focus(); }} blurOnSubmit={false}/>
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={() => { this.third.focus(); }} ref={(input) => { this.second = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={() => { this.fourth.focus(); }} ref={(input) => { this.third = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={() => { this.valid; }} ref={(input) => { this.fourth = input; }} blurOnSubmit={false} />
                        </View>
                        <Text style={styles.text}>Vous n'avez pas reçu le code ? <Text style={styles.redText}>Renvoyer</Text></Text>
                    </View>
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        )
    }
}
