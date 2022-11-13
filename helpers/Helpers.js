import axios from 'axios';
import { useState,useEffect } from 'react';
//const [data,setData] = useState([]);
const PORT='192.168.1.4';
//useEffect(() => getUsers(),[])
export class Helpers { 
    
    async saveUser (data) {
        try {
    
            const response = await axios.post('localhost:3000/api/user' , 
            data);
    
        }catch (eroor){
            console.log(error)
        }
    };
    
    async getUsers () {
        try{ 
            const response  = await axios.get(`http://${PORT}:3000/api/users`)
                            .then(data => { data})
                            .then(json => { return json})
             
            
             
        }catch (error){
            console.log(error)
        }
    };
    
    async getUserId(id){
        try{
            const response = await axios.get(`localhost:3000/api/user/${id}`)
            return response.data;
        }catch (error){
            console.log(error)
        }
    };
    async updateUser (id,data){
       try{
        await axios.put(`localhost:3000/api/user/${id}`,data)
       }catch (error){
        console.log(error)
       }
    };
    async saveVenta (data){
        try{
            const response = await axios.post('https://back-endpdm3.herokuapp.com/api/Venta',data)
        }catch (error){
            console.log(error)
        }
    };
    async getVentas()  {
        try{
            const response = await axios.get('http://back-endpdm3.herokuapp.com/api/Ventas')
            return response.data
        }catch(error){
            console.log(error)
        }
    };
    
    async getVentasUser(id){
        try {
            const response = await axios.get(`http://back-endpdm3.herokuapp.com/api/Venta/${id}`)
            return response.data
        }catch(error){
            console.log(error)
        }
    };
}
