import { FlatList,View} from "react-native";
import { useState } from 'react';
import { Helpers } from "../helpers/Helpers";
import Textrows from './Textrows';


export default function ventasid ({navigation,route}) {
    const [data,setData]= useState([])
    let id = route.params.idvend;
    console.log('id : ', id)
    let objt = new Helpers(); 
     objt.getVentasUser(id)
     .then(d => { 
     setData(d) 
    })
    return(
        <FlatList
          data={data}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (     
                <View>
                    <Textrows
                    label = "fecha:"
                    dato = {item.fecha}
                    />
                    <View>
                        <Textrows
                            label = "Zona:"
                            dato = {item.zona}
                        />
                        <Textrows
                            label = "valor:"
                            dato = {item.ValorVenta}
                        />
                    </View>
                    <Textrows
                        label = "Comision:"
                        dato = {item.comision}
                    />
                </View>   
          )}
        />
    )
}