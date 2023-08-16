import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button} from "react-native"
import { useNavigation } from '@react-navigation/native'


const LogInScreen = () => {
    const navigation = useNavigation()
    return (  
        <View style={styles.screen}>
            <Text>This is the LOG IN screen</Text>
            <Button title="move to Routes" onPress={()=>navigation.navigate('Routes')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
 
export default LogInScreen;

