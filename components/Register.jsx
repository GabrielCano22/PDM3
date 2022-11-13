import {Text,View,TextInput,TouchableOpacity,Switch } from 'react-native'
import {useForm,Controller} from 'react-hook-form'
import {styles} from '../assets/style/style'
import { useState } from 'react';


export default function Register({navigation}){
    const {register,control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            idvend:'',
            nombre:'',
            correo:'',
            rol:''
        }
    })
    const  onSubmit = data => {
      let user = {idvend : data.idvend ,nombre: data.nombre ,correo: data.correo ,rol: isfourth}
      navigation.navigate('Login')
      };

    const [isfourth, setIsfourth] = useState(false);
    const toggleSwitch = () => setIsfourth(isActive => !isActive);
    

    return(
        <View style={styles.container}>
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
      {errors.fullname?.type=='required'&&<Text style={{color:'red'}}> La identificacion es obligatoria</Text>}
      {errors.fullname?.type=='maxLength'&&<Text style={{color:'red'}}> La identificacion debe tener 12 numeros</Text>}
      {errors.fullname?.type=='minLength'&&<Text style={{color:'red'}}> La identificacion debe tener minimo 8 numeros</Text>}
      {errors.fullname?.type=='pattern'&&<Text style={{color:'red'}}> La identificacion solo puede contener numeros</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:30,
          minLength:8
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.username?.type == "required"||errors.username?.type == "maxLength"
          ||errors.username?.type == "minLength"||errors.username?.type == "pattern"?'red':'green'}]}
          placeholder="nombre "
          onChange={onChange}
          onBlur={onBlur}
          value={value}   
          />
        )}
        name='nombre'
      />
      {errors.username?.type=='required'&&<Text style={{color:'red'}}> El Nombre es obligatorio</Text>}
      {errors.username?.type=='maxLength'&&<Text style={{color:'red'}}> El Nombre debe tener almenos 30 chars</Text>}
      {errors.username?.type=='minLength'&&<Text style={{color:'red'}}> El Nombre debe tener minimo 8 chars</Text>}
      {errors.username?.type=='pattern'&&<Text style={{color:'red'}}> El Nombre debe tener solo letras y espacios</Text>}

<Controller
        control={control}
        rules={{
          required:true,
          pattern: /^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,3,4})+$/,
          maxLength:50,
          minLength:15
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.password?.type == "required"||errors.password?.type == "maxLength"
          ||errors.password?.type == "minLength"||errors.password?.type == "pattern"?'red':'green'}]}
          placeholder="contraseña"
          onChange={onChange}
          onBlur={onBlur}
          value={value}  
          />
        )}
        name='correo'
      />

    {errors.password?.type=='required'&&<Text style={{color:'red'}}>El correo es obligatorio</Text>}
    {errors.password?.type=='pattern'&&<Text style={{color:'red'}}>El correo de tener @ y dominio finalizado en .com</Text>}
    {errors.password?.type=='maxLength'&&<Text style={{color:'red'}}>debe tener maximo 50 caracteres</Text>}
    {errors.password?.type=='minLength'&&<Text style={{color:'red'}}>debe tener minimo 15 caracteres</Text>}
     
    <View style={{flexDirection:'row',marginTop:20,marginBottom:20}}>
  
            <Text> es Admin? </Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}       
              onValueChange={toggleSwitch}
              value={isfourth}
            />
 
      </View>
    
    

    <TouchableOpacity 
    style={styles.butons}
    onPress={handleSubmit(onSubmit)}
    >
        <Text style={{color:'white'}}>Registrarse</Text>
    </TouchableOpacity>
      
        </View>
    )
}