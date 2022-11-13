import { Text,View,TextInput,FlatList,Picker } from 'react-native';
import axios from 'axios'; // Es un consumidor de apis
import {useForm,Controller} from 'react-hook-form';
import { useState } from 'react';
import userv from './Homev.jsx'
import {helper, Helpers} from '../helpers/Helpers.js'

export default function RegistroVenta(){
    const [valorZona, setValorZona] = useState('')

    const {register,control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            valorVenta:''
        }
        
    })

    const calcularComision = (valZona,valVenta) => {
        let comision = 0
        let porcentaje = 0
        if(valZona === ''){
            alert("Debe seleccionar la zona de la venta")
        }
        if(valZona === 'sur'){
            porcentaje = 0.03 
        }
        else if(valZona === 'norte') {
            porcentaje = 0.02
        }
        return comision = porcentaje * valVenta
    }

    const registrarVenta = () => {
        let fecha = new Date()
        const venta = {
            idvend:userv.idvend,
            zona:valorZona,
            fecha:fecha.toDateString(),
            ValorVenta:valorVenta,
            comision:calcularComision(valorZona,valorVenta)
        }

        const vendedor = {
            idvend:userv.idvend,
            nombre:userv.nombre,
            correo:userv.correo,
            rol:userv.rol,
            totalcomision:userv.totalcomision += venta.comision
        }

        let ayuda = new Helpers()
        ayuda.saveVenta(venta)
        ayuda.updateUser(userv.idvend,vendedor)
    }

    return(
        <View>
            <Picker
                selectedValue={valorZona}
                onValueChange={(itemValue, itemIndex) => setValorZona(itemValue)}
            >
                <Picker.Item label="Seleccione la zona" value="" />
                <Picker.Item label="Sur" value="sur" />
                <Picker.Item label="Norte" value="norte" />
            </Picker>

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