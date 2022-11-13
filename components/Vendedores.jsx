import { FlatList,TouchableOpacity,View } from "react-native-web";
import { Helpers } from "../helpers/Helpers";
import Textrows from './Textrows';

export default function Vendedores ({navigation}){
    const objt = new Helpers();
    const data = objt.getUsersv();

    return(
        <FlatList
          data={data}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
           <TouchableOpacity
           style={{backgroundColor:'orange'}}
            onPress = {()=>{
              //alert(`correo ${item.email}, usuarion: ${item.username}`)
              navigation.navigate('ventas',item.idvend)
              
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