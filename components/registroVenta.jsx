import { Text,View,TextInput,FlatList } from 'react-native'
import {useForm,Controller} from 'react-hook-form'

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

    return(
        <View>
            <Controller
                control={control}
                rules={{
                    required:true,
                    pattern:/^[0-9{8,12}]+$/g,
                    maxLength:30,
                    minLength:3
                }}
                render={({field:{onChange,onBlur,value}})=>(
                    <TextInput
                        style={[styles.inputs,{borderColor:errors.fullname?.type == "required"||errors.fullname?.type == "maxLength"
                        ||errors.fullname?.type == "minLength"||errors.fullname?.type == "pattern"?'red':'green'}]}
                        placeholder="identificacion"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}               
                    />
                )}
                name='idvend'
            />

            <FlatList
                data={zonas}
                renderItem={renderItem}
                keyExtractor={({ zona }, index) => zona}
            />
        </View>
    )
}