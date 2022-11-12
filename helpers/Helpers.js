import axios from 'axios';


const saveUser = async (data) => {
    try {

        const response = await axios.post('http://back-endpdm3.herokuapp.com/api/user' , 
        data);

    }catch (eroor){
        console.log(error)
    }
};

const getUsers = async () => {
    try{
        const response = await axios.get('http://back-endpdm3.herokuapp.com/api/users')
        return response.data;
    }catch (error){

    }
};

const getUserId = async (id) => {
    try{
        const response = await axios.get(`https://back-endpdm3.herokuapp.com/api/user/${id}`)
        return response.data;
    }catch (error){
        console.log(error)
    }
};

const saveVenta = async (data) => {
    try{
        const response = await axios.post('https://back-endpdm3.herokuapp.com/api/Venta',data)
    }catch (error){
        console.log(error)
    }
};
const getVentas = async () => {
    try{
        const response = await axios.get('http://back-endpdm3.herokuapp.com/api/Ventas')
        return response.data
    }catch(error){
        console.log(error)
    }
};

const getVentasUser = async (id) => {
    try {
        const response = await axios.get(`http://back-endpdm3.herokuapp.com/api/Venta/${id}`)
        return response.data
    }catch(error){
        console.log(error)
    }
};
