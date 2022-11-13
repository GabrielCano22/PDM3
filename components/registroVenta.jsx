import { Text,View,TextInput,FlatList } from 'react-native';
import axios from 'axios'; // Es un consumidor de apis
import {useForm,Controller} from 'react-hook-form';

export default function RegistroVenta(){

    const {register,control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            idvend:'',
            zona:'',
            fecha:'',
            valorVenta:''
        }
    })

    const zonas = [
        {
            zona:'Sur',
            valor:0.03
        },
        {
            zona:'Norte',
            valor:0.03
        }
    ]

    const registrarVenta = () => {
        let fecha = new Date()
    }

    return(
        <View>
            <FlatList
                data={zonas}
                renderItem={renderItem}
                keyExtractor={({ zona }, index) => zona}
            />

           <Controller
                control={control}
                rules={{
                    required:true,
                    maxLength:12,
                    minLength:3
                }}
                render={({field:{onChange,onBlur,value}})=>(
                    <TextInput
                        style={[styles.inputs,{borderColor:errors.valorVenta ?.type == 'required' ||
                        errors.valorVenta ?.type == 'pattern' || errors.valorVenta ?.type == 'maxLength' ||
                        errors.valorVenta ?.type == 'minLength' ? 'red' : 'green' }]}
                        placeholder='Valor de venta'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name='valorVenta'
           />

           {errors.valorVenta ?.type == 'required' && <Text style={{color:'red'}}> El campo es requerido </Text>}
           {errors.valorVenta ?.type == 'maxLength' && <Text style={{color:'red'}}> Debe contener maximo 12 caracteres</Text>}
           {errors.valorVenta ?.type == 'minLength' && <Text style={{color:'red'}}>Debe contener minimo 3 caracteres</Text>} 

            <TouchableOpacity
                onPress={()=>registrarVenta()}
            >
                <Text style={{color:'white'}}>Añadir</Text>
            </TouchableOpacity>
        </View>
    )
}