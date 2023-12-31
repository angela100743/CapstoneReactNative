import {Ionicons} from "@expo/vector-icons";
import { Text } from "react-native";

export const navOptionsWithHeader = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: "green"
        },
        headerRight: () => (
            <Ionicons
                name="menu"
                size={32}
                color="white"
                onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerLeft: () => (
            <Text style={{color:'white', fontSize:20, paddingLeft:5}}>Logo</Text>
        )
    }
}

export const navOptionsWithoutHeader = {
    headerShown: false,
};