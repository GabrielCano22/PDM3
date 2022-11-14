import { FlatList,TouchableOpacity,View } from "react-native-web";
import { Helpers } from "../helpers/Helpers";
import { useState } from "react";
import Textrows from './Textrows';

export default function Vendedores ({navigation}){
    const [data,setData]= useState([])
    const objt = new Helpers();
    objt.getUsersv()
    .then(
        d => setData(d)
    )
    
     async () => data = await objt.getUsersv();

    return(
        <FlatList
          data={data}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
           <TouchableOpacity
           style={{backgroundColor:'lightgreen',border:'solid'}}
            onPress = {()=>{
              //alert(`correo ${item.email}, usuarion: ${item.username}`)
              navigation.navigate('ventasid',item)
              
            }
            }>
                <Textrows
                    label="Nombre:"
                    dato = {item.nombre}
                />
                <Textrows
                    label="identificacion:"
                    dato = {item.idvend}
                />
                <Textrows
                    label="Comision:"
                    dato = {item.totalcomision}
                />
            
           </TouchableOpacity> 
          )}
        />
    )
}