import {Text,View,TextInput,TouchableOpacity,Switch,img } from 'react-native'
import {useForm,Controller} from 'react-hook-form'


export default function Login({navigation}){
    const {control,handleSubmit,formState:{errors}}=useForm({
        userName:'',
        password:''
    })
   // console.log(lista.lista())
   const onSubmit= data =>{     
       let arr = lista.lista();
       let val = false
       let user = {}
   for (let i=0;i<arr.length;i++){
       console.log(data.userName) 
       console.log(data.password)   
       if (arr[i].username == data.userName && arr[i].password == data.password){
            val = true
            user = arr[i]
       }
    }
    if(val){navigation.navigate(user.rol?'Home':'Homeu',user)}
    else{console.log('usuario no se encuentra')}
   }
   return(
       <View style={styles.container}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:30,fontFamily:'aerial',fontWeight:'bold',color:'green'}}> Iniciar Sesion</Text>
               <img src={f} style={{width:100,height:100}}/>
            </View>
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
               style={[styles.inputs,{borderColor:errors.userName ?.type == 'required' || errors.userName ?.type == 'pattern' || errors.userName ?.type == 'maxLength' || errors.userName ?.type == 'minLength' ? 'red' : 'green' }]}
               placeholder='Nombre de usuario'
               onChange={onChange}
               onBlur={onBlur}
               value={value}
               />
           )}
           name='userName'
           />
           
           {errors.userName ?.type == 'required' && <Text style={{color:'red'}}> El campo es requerido </Text>}
           {errors.userName ?.type == 'pattern' && <Text style={{color:'red'}}> debecontener solo letras y espacios</Text>}
           {errors.userName ?.type == 'maxLength' && <Text style={{color:'red'}}> Debe contener maximo 30 caracteres</Text>}
           {errors.userName ?.type == 'minLength' && <Text style={{color:'red'}}>Debe contener minimo 8 caracteres</Text>} 


       <Controller 
       control={control}
       rules={{
           required:true,
           pattern:/^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ ]+$/g,
           maxLength:20,
           minLength:6

       }}
       render={({field:{onChange,onBlur,value}})=>(
           <TextInput
           style={[styles.inputs,{borderColor:errors.password?.type=='required'||errors.password?.type=='pattern'||errors.password?.type=='maxLength'||errors.password?.type=='minlenght'?'red':'green'}]}
           placeholder="contraseña"
           onChange={onChange}
           onBlur={onBlur}
           value={value}
           secureTextEntry={true}
           />)}
       name='password'
       />
       {errors.password?.type=='required'&&<Text style={{color:'red'}}>El campo es requerido</Text>}
       {errors.password?.type=='pattern'&&<Text style={{color:'red'}}>La contraseña debe tener numeros y letras y caracter especial</Text>}
       {errors.password?.type=='maxLength'&&<Text style={{color:'red'}}>debe tener maximo 20 caracteres</Text>}
       {errors.password?.type=='minLength'&&<Text style={{color:'red'}}>debe tener minimo 6 caracteres</Text>} 

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