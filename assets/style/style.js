import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputs:{
      padding:10,
      borderRadius:10,
      color:'black',
      marginBottom:5,
      borderWidth:1,
      borderColor:'green'
  
    },
    butons:{
      marginTop:20,
      backgroundColor:'yellowgreen',
      borderRadius:20,
      padding:10
    }
    
  });
  const styleRProfile = StyleSheet.create({
    rowsProfile:{
      display:'flex',
      flexDirection:'row',
      margin:10     
    },
    label:{
      fontFamily:'roboto',
      fontWeight:'bold', 
    },
    dato:{
      fontFamily:'roboto',
      fontStyle:'italic'
    }
  })
  const listas = StyleSheet.create({
    container:{
      boder:'solid ',
      backgroundColor:'#98FB98',

    }
  })


export{
  styles,
  styleRProfile,
  listas
}
