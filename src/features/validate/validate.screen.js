import React, { Component } from 'react';
import {View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Alert} from 'react-native';

import styles from './validate.styles';

import { Auth } from 'aws-amplify';

export default class Validate extends Component {

    constructor(props){
        super(props);
        this.state = {
            code: new Array(6)
        }
    }

    valid = async () => {
        let verifCode = "";
        this.state.code.forEach(element => {
            verifCode += element
        })
        console.log(verifCode);
        try {
            const response = await Auth.confirmSignUp(this.props.route.params.phone, verifCode);
            console.log('response:', JSON.stringify(response))
            this.props.navigation.navigate('connected');
        } catch (error) {
            Alert.alert("Error", "Erreur lors de la confirmation du code");
            console.log('error confirming sign up', error);
        }
    }

    reSendCode = () => {
        Auth.forgotPassword(this.props.route.params.phone)
        .then(data => 
          console.log(data),
          Alert.alert('Nouveau code', "Vous avez du recevoir votre nouveau code sur votre téléphone", [{text: 'Fermer'}])
        ).catch(err => console.log(err));
      }

    render() {
        return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.mainText}>Confirmez votre numéro!</Text>
                        <Text style={styles.text}>Entrez le code envoyé au {this.props.route.params.phone}</Text>
                        <View style={styles.inputs}>
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={(text) => { this.second.focus(); this.state.code[0] = text; }} blurOnSubmit={false}/>
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={(text) => { this.third.focus(); this.state.code[1] = text;}} ref={(input) => { this.second = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={(text) => { this.fourth.focus(); this.state.code[2] = text;}} ref={(input) => { this.third = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={(text) => { this.fifth.focus(); this.state.code[3] = text;}} ref={(input) => { this.fourth = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onChangeText={(text) => { this.sixth.focus(); this.state.code[4] = text;}} ref={(input) => { this.fifth = input; }} blurOnSubmit={false} />
                            <TextInput style={styles.input} keyboardType = 'numeric' maxLength={1} onSubmitEditing={this.valid} onChangeText={(text) => { this.state.code[5] = text;  }} ref={(input) => { this.sixth = input; }} blurOnSubmit={false} />
                        </View>
                        <Text style={styles.text}>Vous n'avez pas reçu le code ? <TouchableWithoutFeedback onPress={this.reSendCode}><Text style={styles.redText}>Renvoyer</Text></TouchableWithoutFeedback></Text>
                    </View>
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        )
    }
}
