import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './login.styles';
import Button from './components/button';

class Login extends Component {

    navigateToNumberValidation = () => {
        this.props.navigation.navigate('call');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Connectez vous simplement !</Text>
                <Button 
                    buttonStyle={styles.apple} 
                    img={require('../../../assets/apple.png')} 
                    text="Continuer avec Apple" 
                    textStyle={styles.whiteText} 
                    // press={() => {return false;}}
                />
                <Button 
                    buttonStyle={styles.facebook} 
                    img={require('../../../assets/facebook.png')} 
                    text="Continuer avec Facebook" 
                    textStyle={styles.whiteText} 
                    // press={() => {return false;}}
                />
                <Button 
                    buttonStyle={styles.google} 
                    img={require('../../../assets/google.png')} 
                    text="Continuer avec Google" 
                    textStyle={styles.darkText} 
                    // press={() => {return false;}}
                />
                <Button 
                    buttonStyle={styles.call} 
                    img={require('../../../assets/call.png')} 
                    text="Avec votre numéro!" 
                    textStyle={styles.whiteText} 
                    press={this.navigateToNumberValidation}
                />
                
            </View>
        )
    }
}

export default Login;
