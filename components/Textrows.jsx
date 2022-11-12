import {View,Text} from "react-native"


export default function Textrows ({label,dato}){

    return(
        <View>
            <Text>{label}</Text>
            <Text>{dato}</Text>
        </View>
    )
}