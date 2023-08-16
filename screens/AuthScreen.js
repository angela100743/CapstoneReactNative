import React from 'react';
import { View } from 'react-native';
import LoginOrSignUpForm from '../components/LoginOrSignUpForm';

const AuthScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <LoginOrSignUpForm />
        </View>
    );
};


export default AuthScreen;
