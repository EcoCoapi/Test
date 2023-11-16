import React, { useContext } from "react";
import { Pressable , Text, TouchableOpacity, View} from "react-native";
import { GlobalStateContext } from "../global";

export default function MarkerMap({top, left, nb, lieu, action}) {



    const handle = () => {
        console.log("Oui")
        action()
    }


    return (

        <View style={{alignItems : 'center',  position : 'absolute', left : left, top : top, gap : 2}}>
            <TouchableOpacity  onPress={handle} style={ {borderWidth : 1, borderStyle : 'solid', alignItems : 'center',  width : 30, height : 20, borderRadius : 10,  backgroundColor : "#527721"}}>
                <Text style={{marginBottom : 3, textAlign : 'center', color : '#fff', fontWeight : '400', verticalAlign : 'middle'}}>{nb}</Text>
            </TouchableOpacity>
            <Text style={{borderWidth : 1, borderStyle : 'solid', borderRadius : 3, padding : 1, textAlign : 'center',  backgroundColor : "#f1f1f1", fontSize : 10, fontWeight : 'bold', fontStyle : 'italic'}}>{lieu}</Text>
        </View>

    )

}