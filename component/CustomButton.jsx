import React from "react";
import { Pressable , Text, TouchableOpacity} from "react-native";

export default function CustomButton({text, action, width, height, color, textColor, disable }){


    return(
        <TouchableOpacity style={{padding : "3%" ,backgroundColor : disable ? "#D9D9D9" : color , justifyContent : 'center', alignItems : 'center', width : width, height : height, borderRadius : 15}} onPress={disable ? null : action}>
            <Text style={{ width : "100%", color : disable ? "#fff" : textColor, textAlignVertical : 'center', textAlign : 'center', fontSize : 15, fontWeight : "600"}}>{text}</Text>
        </TouchableOpacity>
    )
}