import {Text,View,TextInput,TouchableOpacity} from 'react-native'
import { styles } from '../assets/style/style'
import {useForm,Controller} from 'react-hook-form'
import { Helpers} from '../helpers/Helpers'
import { useEffect } from 'react'



export default function Login({navigation}){
    const {control,handleSubmit,formState:{errors}}=useForm({
        nombre:'',
        idvend:''
    })

     const onSubmit= async (data) =>{   
        let lista = new Helpers();         

        let arr = await lista.getUsers();
         console.log(arr)
         let val = false
         let user = {}
     for (let i=0;i<arr.length;i++){   
         if (arr[i].nombre == data.nombre && arr[i].idvend == data.idvend){
              val = true
              user = arr[i]
         }
      }
       if(val){navigation.navigate(user.rol?'Homea':'Homev',user)}
       else{console.log('usuario no se encuentra')}
     }
   return(
       <View style={styles.container}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:30,fontFamily:'aerial',fontWeight:'bold',color:'green'}}> Iniciar Sesion</Text>
            </View>
            <Controller
           control={control}
           rules={{
               required:true,
               pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
               maxLength:20,
               minLength:2
           }}
           render={({field:{onChange,onBlur,value}})=>(
               <TextInput
               style={[styles.inputs,{borderColor:errors.nombre ?.type == 'required' || errors.nombre ?.type == 'pattern' || errors.nombre ?.type == 'maxLength' || errors.nombre ?.type == 'minLength' ? 'red' : 'green' }]}
               placeholder='Nombre'
               onChange={onChange}
               onBlur={onBlur}
               value={value}
               />
           )}
           name='nombre'
           />
           
           {errors.nombre ?.type == 'required' && <Text style={{color:'red'}}> El campo es requerido </Text>}
           {errors.nombre ?.type == 'pattern' && <Text style={{color:'red'}}> debecontener solo letras y espacios</Text>}
           {errors.nombre ?.type == 'maxLength' && <Text style={{color:'red'}}> Debe contener maximo 30 caracteres</Text>}
           {errors.nombre ?.type == 'minLength' && <Text style={{color:'red'}}>Debe contener minimo 8 caracteres</Text>} 


       <Controller 
       control={control}
       rules={{
           required:true,
           pattern:/^[0-9{8,12}]+$/g,
           maxLength:20,
           minLength:3

       }}
       render={({field:{onChange,onBlur,value}})=>(
           <TextInput
           style={[styles.inputs,{borderColor:errors.idvend?.type=='required'||errors.idvend?.type=='pattern'||errors.idvend?.type=='maxLength'||errors.idvend?.type=='minlenght'?'red':'green'}]}
           placeholder="identificacion"
           onChange={onChange}
           onBlur={onBlur}
           value={value}
           />)}
       name='idvend'
       />
       {errors.idvend?.type=='required'&&<Text style={{color:'red'}}>El campo es requerido</Text>}
       {errors.idvend?.type=='pattern'&&<Text style={{color:'red'}}>La contraseña debe tener numeros y letras y caracter especial</Text>}
       {errors.idvend?.type=='maxLength'&&<Text style={{color:'red'}}>debe tener maximo 20 caracteres</Text>}
       {errors.idvend?.type=='minLength'&&<Text style={{color:'red'}}>debe tener minimo 6 caracteres</Text>} 

        <TouchableOpacity style={styles.butons}
       onPress={handleSubmit(onSubmit)}>
           <Text style={{color:'white'}}> Ingresar</Text>
       </TouchableOpacity>
       
        <TouchableOpacity style={{}}
       onPress={()=>{
           navigation.navigate('Register')
       }}>
           <Text style={{marginTop:15,color:'green',textDecorationLine:'underline'}}>Registrarse</Text>
       </TouchableOpacity>  

       </View>
       
   )   
}