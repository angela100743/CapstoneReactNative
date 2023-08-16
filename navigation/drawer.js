import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import TrackingScreen from '../screens/TrackingScreen';
import EvalScreen from '../screens/EvalScreen';
import { Image, Linking, SafeAreaView, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons";

import { HomeTabs } from './tabs';


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: '#2f947'}}>
                        <View style={{justifyContent:'center', alignItems:'center', height: 140}}>
                            <Image
                                style={{ width: 100, height: 100, resizeMode:'contain' }}
                                source={require("../assets/ktmtransitlogo.png")}
                            
                            />
                        </View>
                        <DrawerItemList {...props} />
                        <DrawerItem 
                            label="More info"
                            onPress={()=>Linking.openURL('https://google.com')}
                        />
                    </SafeAreaView>
                );
            }}
                screenOptions={{
                    headerShown: false,
                }}
        >
            <Drawer.Screen 
            // name="HomeStack" 
            // component={HomeStack} 
            name="HomeTabs"
            component={HomeTabs}
            options={{title: 'Home'}} 
            />
            <Drawer.Screen
            name="Track" 
            component={TrackingScreen} 
            options={{title: 'Tracking'}}
            />
            <Drawer.Screen
            name="Evaluation" 
            component={EvalScreen} 
            options={{title: 'Evaluation'}}
            />
        </Drawer.Navigator>
    );
}
//     return (
//         <Drawer.Navigator screenOptions={{headerShown: false}}>
//             <Drawer.Screen 
//             name="HomeStack" 
//             component={HomeStack} 
//             options={{title: 'Home'}}
//             />
//             <Drawer.Screen
//             name="Track" 
//             component={TrackingScreen} 
//             options={{title: 'Tracking'}}
//             />
//             <Drawer.Screen
//             name="Evaluation" 
//             component={EvalScreen} 
//             options={{title: 'Evaluation'}}
//             />
//         </Drawer.Navigator>
//     );
// }