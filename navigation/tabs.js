import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrackingScreen from '../screens/TrackingScreen';
import {Ionicons} from "@expo/vector-icons";
import { navOptionsWithHeader } from './options';
import EvalScreen from '../screens/EvalScreen';
import IndvRouteScreen from '../screens/IndvRouteScreen';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'green',
            },
            tabBarActiveTintColor: 'yellow',
            // tabBarInactiveTintColor: 'black',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'Tracking') {
                    iconName = focused ? 'navigate-circle' : 'navigate-circle-outline'
                }

                return <Ionicons name={iconName} size={focused? 30: size} color={color} />
            }
        })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={navOptionsWithHeader} />
      <Tab.Screen 
        name="IndvRoute" 
        component={IndvRouteScreen}
        options={navOptionsWithHeader} />
      <Tab.Screen 
        name="Tracking" 
        component={TrackingScreen}
        options={navOptionsWithHeader} />
      <Tab.Screen 
        name="Eval" 
        component={EvalScreen}
        options={navOptionsWithHeader} />
      
    </Tab.Navigator>
  );
}