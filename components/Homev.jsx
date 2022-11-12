import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from './Profile'
import registroVenta from './registroVenta'
import Ventas from './ventas';

function Homev ({navigation,route}){
    const Tab = createBottomTabNavigator()


    return(
        <>
        <Tab.Navigator>
            <TabScreen name = "Profile" component = {Profile} options = {{
                title: "Cuenta",
                tabBarActiveTintColor:'green',
                
            }}/>
            <Tab.Screen name = "registroVenta" component = {registroVenta} options = {{
                title: "Registrar Venta",
                tabBarActiveTintColor:'green',

            }}/>
            <Tab.Screen name = "ventas" component = {Ventas} options = {{
                title: "Ventas",
                tabBarActiveTintColor:'green'
            }}/>

        </Tab.Navigator>
        </>
    )
}

export{
    Homev
}