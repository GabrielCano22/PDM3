import Textrows from "./Textrows";
import {usera} from "./Homea";
import {userv} from "./Homev";
let user = {}
export default function Profile () {
if(usera.rol){
    user = usera
}else{
    user = userv
}
const rol = (d) => {
    let r = ""
    if(d == true) {
        r = "Adiminstrador"
    }else{
        r = "Vendedor"
    }
    return r
};
 const comision = (rol) => {

     if(rol==false){
         return(
             <Textrows
         label="comision:"
         dato = {user.totalcomision}/>   
         )
     }
 };
    return(
        <>
            <Textrows
            label="Nombre:"
            dato = {user.nombre}
            />
            <Textrows
            label="correo:"
            dato = {user.correo}
            />
            <Textrows
            label="rol:"
            dato = {rol(user.rol)}
            /> 
            {
                comision(user.rol)
            }
        </>
        
    )


}