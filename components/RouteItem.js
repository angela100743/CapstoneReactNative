import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RouteItem = ({id, title, date_added, distance, time}) => {
    const navigation = useNavigation()
    return (  
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("IndvRoute",{routeId: id, title, description, datetime})}>
            <Text>{title}</Text>
            <Text>{date_added}</Text>
            <Text>{distance}</Text>
            <Text>{time}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default RouteItem;