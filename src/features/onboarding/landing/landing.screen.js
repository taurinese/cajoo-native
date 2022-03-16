import React from 'react';
import {View, Text, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styles from './landing.styles';

class Landing extends React.Component {

    navigateToLogin = () => {
        this.props.navigation.navigate('login');
    }

    render() {
        return (
        <View style={styles.container}>
            <Image 
                style={styles.cajoo}
                source={require('../../../assets/cajoo.png')} 
            />
            <Text style={styles.cajooText}>Vos courses en 3 clics !</Text>
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.loginButton} onPress={this.navigateToLogin}>
                    <Text style={styles.loginButtonText}>ME CONNECTER 👋</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.discoverButtonText}>Découvrir l'app</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

export default Landing;
