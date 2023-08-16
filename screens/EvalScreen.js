import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button} from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from "@react-navigation/elements";
import EvaluationForm from '../components/EvalForm';


const EvalScreen = () => {
    const navigation = useNavigation()
    return (  
        <View style={styles.screen}>
            <EvaluationForm />
            {/* <Text>This is the home screen</Text>
            <Button title="move to LOGO" onPress={()=>navigation.navigate('Logo')} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default EvalScreen;
