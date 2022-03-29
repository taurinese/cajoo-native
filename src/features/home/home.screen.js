import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Button} from 'react-native';

class Home extends Component {

    render() {
        return(
            <View>
                <Text>Connecté</Text>
                <Button onPress={() => this.props.navigation.navigate('landing')} title="Logout" />
            </View>
        )
    }
}

export default Home;