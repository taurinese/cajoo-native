import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

import styles from './connect.styles';
import validateNumber from './connect.helper';

class Connect extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: '',
            isValid: false,
            // isFocused: false
        }
    }

    onChangePhoneNumber = (number) => {
        let isValid = false;
        this.setState({number});
        if(number.length == 10 && number.charAt(0) == 0){
            number = number.substring(1);
            this.setState({number})
            if(validateNumber('+33' + number)){
                isValid = true;
            }
            this.setState({isValid});
        }
    }

    validateNumber = () => {
        if(this.state.isValid){
            this.props.navigation.navigate('validateNumber', {phone: '+33' + this.state.number});
        }
        else{
            Alert.alert('Erreur', "Le numéro de téléphone entré n\'est pas valide");
        }
    }

    render() {
        return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>Quel est votre numéro?</Text>
                    <Text style={styles.secondaryText}>Pour que notre livreur puisse vous contacter 😁</Text>
                    <View style={styles.input}>
                        <Image style={styles.france} source={require('../../assets/france.png')} />
                        <Image style={styles.down} source={require('../../assets/down.png')} />
                        <Text style={styles.prefixNumber}>+33</Text>
                        <TextInput 
                            keyboardType='numeric' 
                            style={styles.textInput} 
                            value={this.state.phone} 
                            onChangeText={number => this.onChangePhoneNumber(number)}
                            // onFocus={() => this.state.isFocused = true}
                        />
                    </View>
                    <View style={styles.bottomDiv}>
                            <Text style={styles.bottomText}>En cliquant sur "CONTINUER", vous acceptez la <Text style={styles.redText}>Politique de Confidentialité</Text>, les <Text style={styles.redText}>CGU</Text> et les <Text style={styles.redText}>CGV</Text> de Cajoo.</Text>
                            <TouchableOpacity onPress={this.validateNumber} style={this.state.isValid ? styles.validateBtn : styles.validateBtnDisabled}>
                                <Text style={styles.whiteText}>CONTINUER</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        )
    }
}

export default Connect;
