import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from './Profile';
import Vendedores from './Vendedores';
import Ventas from './ventas';
let usera={}
function Homea ({navigation,rout}){
    const Tab = createBottomTabNavigator();
    usera = {
        nombre:rout.params.nombre,
        idvend:rout.params.idvend,
        rol:rout.params.rol
    }
    
    return(
        <Tab.Navigator 
            screenOption = {() => ({
                headerShown: false
            })}>
                <Tab.Screen name = "Profile" component = {Profile} options = {{
                    title: "Cuenta",
                    tabBarInactiveTintColor: 'green'

                }}/>

                <Tab.Screen name = "Vendedores" component={Vendedores} options = {{
                    title: "Vendedores",
                    tabBarActiveTintColor: 'green'
                }} />

                <Tab.Screen name = "Ventas" component = {Ventas} options = {{
                    title: "Ventas",
                    tabBarActiveTintColor:'green'
                }}/>

        
        </Tab.Navigator>
    )
}

export {
    Homea,
    usera
}