import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Homev from './components/Homev';
import Homea from './components/Homea';
import Register from './components/Register';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <StackActions.Navigator
      initialRouteNAme ="Login">
        <Stack.Screen name = "Login" component ={Login} options  = {{title:'App Ventas'}}/>
        <Stack.Screen name = "Homev" component = {Homev} />
        <Stack.Screen name = "Homea" component = {Homea} />
        <Stack-Screen name = "Registro" component = {Register} />  
      </StackActions.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
