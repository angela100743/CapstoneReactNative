import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';


const RoutesScreen = () => {
    const navigation = useNavigation()
    return (  
        <View style={styles.screen}>
            <Text>This is the ROUTES screen</Text>
            <Button title="move to TRACKING" onPress={()=>navigation.navigate('Tracking')} />
            <Button title="move to INDV ROUTE" onPress={()=>navigation.navigate('IndvRoute')} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
 
export default RoutesScreen;

