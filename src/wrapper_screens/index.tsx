import React from "react";
import { Initial } from "../screens/initial";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Circuits } from "../screens/circuits";

const Stack = createNativeStackNavigator();

export const Wrapper_Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Initial}/>
        <Stack.Screen name="Circuitos" component={Circuits} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// const CompTest = ({navigation, route})=>{
//     const [circuits, setCircuits] = React.useState([])
//     React.useEffect(()=>{
//         fetch('http://ergast.com/api/f1/circuits.json')
//             .then(r=>r.json())
//             .then(r=>{
//                 console.log(r)
//                 console.log(r.MRData.CircuitTable.Circuits)
//                 setTimeout(()=>{

//                     setCircuits(r.MRData.CircuitTable.Circuits)
//                 },3000)
//             })
//     },[])
//     return(
//         <>
//             <View>
                
//                 <TouchableOpacity onPress={()=>navigation.goBack()}>
//                 <Text>back</Text>
//                 </TouchableOpacity>

//                 {circuits.map((c)=>{
//                     return (<Text>{c.circuitId}</Text>)
//                 })}
 
//             </View>
            
//         </>
//     )
// }