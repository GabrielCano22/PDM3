import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IoIosBody,IoIosListBox,IoIosCash} from "react-icons/io";
import Profile from './Profile';
import Vendedores from './Vendedores';
import Ventas from './ventas';
let usera={}
function Homea ({navigation,rout}){
    const Tab = createBottomTabNavigator();
    usera = {
        nombre:rout.params.nombre,
        idvend:rout.params.idvend,
        correo:rout.params.correo,
        rol:rout.params.rol
    }
    
    return(
        <Tab.Navigator 
            screenOption = {() => ({
                headerShown: false
            })}>
                <Tab.Screen name = "Profile" component = {Profile} options = {{
                    title: "Cuenta",
                    tabBarInactiveTintColor: 'green',
                    tabBarIcon:({focused}) => (
                        <IoIosBody fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                }}/>

                <Tab.Screen name = "Vendedores" component={Vendedores} options = {{
                    title: "Vendedores",
                    tabBarActiveTintColor: 'green',
                    tabBarIcon: ({focused}) => (
                        <IoIosListBox fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                }} />

                <Tab.Screen name = "Ventas" component = {Ventas} options = {{
                    title: "Ventas",
                    tabBarActiveTintColor:'green',
                    tabBarIcon: ({focused}) => (
                        <IoIosCash fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                }}/>

        
        </Tab.Navigator>
    )
}

export {
    Homea,
    usera
}