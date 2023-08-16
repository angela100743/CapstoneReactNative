import { FlatList, RefreshControl, Text, View } from "react-native";
// import { dummy_data } from "../data/dummy";
import RouteItem from "./RouteItem";


const RouteList = ({data}) => {
    const renderItem = ({item}) => {
        return (
            <RouteItem id={item.id} title={item.title} date_added={item.date_added} distance={item.distance} time={item.time} />
            // <View style={{padding:40}}>
            //         <Text>{item.title}</Text>
            // </View>
        )
    };
    const handleRefresh = () => {
        console.log('Refreshing..');
    };
    
    return (  
        <View>
            <FlatList
                data={data}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
                // refresh reloads page when the page is pulled down.
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={handleRefresh}
                    />
                }
                numColumns={1}
            />
        </View>
    );
}

export default RouteList;