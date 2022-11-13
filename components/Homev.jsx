import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IoIosBody,IoIosListBox,IoLogoUsd,IoIosCash} from "react-icons/io";
import Profile from './Profile'
import registroVenta from './registroVenta'
import Ventas from './ventas';
let userv = {}
function Homev ({navigation,route}){
    const Tab = createBottomTabNavigator()
    userv = {
        nombre: route.params.nombre,
        idvend:route.params.idvend,
        rol:route.params.rol,
        correo:route.params.correo,
        totalcomision:route.params.totalcomision
    }
    return(
        <>
            <Tab.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
            >
                <Tab.Screen name = "Profile" component = {Profile} options = {{
                    title: "Cuenta",
                    tabBarActiveTintColor:'green',
                    tabBarIcon:({focused}) => (
                        <IoIosBody fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                    
                }}/>
                {/* <Tab.Screen name = "registroVenta" component = {registroVenta} options = {{
                    title: "Registrar Venta",
                    tabBarActiveTintColor:'green',
                    tabBarIcon: ({focused}) => (
                        <IoLogoUsd fontSize={focused?40:25} color={focused?'green':''}/>
                    )

                }}/>
                <Tab.Screen name = "ventas" component = {Ventas} options = {{
                    title: "Ventas",
                    tabBarActiveTintColor:'green',
                    tabBarIcon: ({focused}) => (
                        <IoIosCash fontSize={focused?40:25} color={focused?'green':''}/>
                    )
                }}/> */}

            </Tab.Navigator>
        </>
    )
}

export{
    Homev,
    userv
}