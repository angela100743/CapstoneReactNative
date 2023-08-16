import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button} from "react-native"
import { useNavigation } from '@react-navigation/native'


const LogoScreen = () => {
    const navigation = useNavigation()
    return (  
        <View style={styles.screen}>
            <Text>This is the LOGO screen</Text>
            <Button title="move to LOG IN" onPress={()=>navigation.navigate('LogIn')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
 
export default LogoScreen;

