import React, { Component, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button} from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from "@react-navigation/elements";

const IndvRouteScreen = () => {
    const route = useRoute()
    const { routeId, title, description, datetime } = route.params
    const navigation = useNavigation()

    // changes the title of page for indv route page
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: "new title",
            // adds a GO BACK function
            headerLeft: () => (
                <HeaderBackButton
                tintColor="white"
                onPress={()=> navigation.goBack()}
                />
            )
        })
    },[])
    return (  
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>This is the INDV ROUTE screen for {routeId}</Text>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Text style={{fontSize: 20}}>{description}</Text>
            <Text style={{fontSize: 20}}>{datetime}</Text>


            <Button title="move to Routes" onPress={()=>navigation.navigate('Routes')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default IndvRouteScreen;

