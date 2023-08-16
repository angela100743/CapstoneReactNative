import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import { MyDrawer } from './navigation/drawer';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View,
//   SafeAreaView,
//   TextInput,
//   Button,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';


//   const [text, setText] = useState("")
//   const handleText = (newText) => {
//     setText(newText);
//   }
//   return (
//     <SafeAreaView>
//       <Text style={{fontSize:32}}>hello</Text>
//       <ScrollView>
//         <View style={styles.pinkContainer}>
//           <TextInput
//             defaultValue={text}
//             onChangeText={handleText}
//             style={{borderWidth: 1, padding: 10}}
//           />
//           <Button title="Submit" onPress={()=> console.log("button pressed")} />
//           <TouchableOpacity style={styles.btn} onPress={()=>console.log("button pressed")}>
//             <Text style={{color:'white'}}>
//               Click
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <StatusBar style='dark' />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   pinkContainer: {
//     backgroundColor:'pink', 
//     height: 1600, 
//     padding: 20
//   },

//   btn: {
//     padding: 10, 
//     backgroundColor: 'purple', 
//     width: 150, height: 100, 
//     justifyContent:'center', 
//     alignItems:'center'
//   }

// })