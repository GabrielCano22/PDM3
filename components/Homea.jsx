import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IoIosBody,IoIosListBox,IoIosCash} from "react-icons/io";
import Profile from './Profile';
import Vendedores from './Vendedores';
import Allventas from './Allventas';
let usera={}
function Homea ({navigation,route}){
    const Tab = createBottomTabNavigator();
    usera = {
        nombre:route.params.nombre,
        idvend:route.params.idvend,
        correo:route.params.correo,
        rol:route.params.rol
    }
    
    return(
        <>
            <Tab.Navigator 
            screenOptions = {() => ({
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

                <Tab.Screen name = "Allventas" component = {Allventas} options = {{
                    title: "Allventas",
                    tabBarActiveTintColor:'green',
                    tabBarIcon: ({focused}) => (
                        <IoIosCash fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                }}/>
            </Tab.Navigator>
        </>
    )
}

export {
    Homea,
    usera
}