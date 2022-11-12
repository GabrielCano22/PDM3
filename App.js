import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';

export default function App() {
  return (
    <NavigationContainer>
      <StackActions.Navigator
      initialRouteNAme ="Login">
        <Stack.Screen name="Login" component ={Login} options  = {{title:'App Ventas'}}/>
        

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
