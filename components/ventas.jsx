import { FlatList,TouchableOpacity,View } from "react-native-web";
import { Helpers } from "../helpers/Helpers";
import Textrows from './Textrows';
import { userv } from "./Homev";


export default function ventas ({navigation,route}) {
    let id = ''
    if (route.params.idvend != null){
        id = route.params.idvend;
    }else{
        id = userv.idvend;
    }
    let objt = new Helpers();
    let data = []
    async () => { data = await objt.getVentasUser(id);}

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