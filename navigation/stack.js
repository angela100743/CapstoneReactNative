import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RoutesScreen from '../screens/RoutesScreen';
import EvalScreen from '../screens/EvalScreen';
import IndvRouteScreen from '../screens/IndvRouteScreen';
import LogInScreen from '../screens/LogInScreen';
import LogoScreen from '../screens/LogoScreen';
import TrackingScreen from '../screens/TrackingScreen';
import { navOptions, navOptionsWithoutHeader } from './options';
import { useNavigation } from '@react-navigation/native';
import { HomeTabs } from './tabs';
import AuthScreen from '../screens/AuthScreen';


const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      // screenOptions={()=>navOptions(navigation)}
      // screenOptions={navOptions}
      initialRouteName="Logo"
    >
      <Stack.Screen name="Logo" component={LogoScreen} />
      {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}
      <Stack.Screen name="AppScreens" component={HomeTabs} />
    </Stack.Navigator>
  );
}

// const AuthStack = () => {
//   return (
//       <Stack.Navigator 
//         screenOptions={navOptions}>
//           <Stack.Screen name="Auth" component={AuthScreen} />
//       </Stack.Navigator>
//   );
// };

// const HomeAuthStack = () => {
//   return (
//       <Stack.Navigator 
//         initialRouteName="HomeAuth"
//         screenOptions={navOptions}>
//           <Stack.Screen name="HomeAuth" component={HomeAuth} />
//       </Stack.Navigator>
//   );
// };


export default HomeStack;