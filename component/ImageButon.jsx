import React from "react";
import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";


export default function ImageButton({text, source, color, action, bgColor}) {


    return (
        <TouchableOpacity onPress={action} style={{zIndex : 999, backgroundColor : bgColor, borderRadius : 15,  borderWidth : 2, borderStyle : 'solid', alignSelf : 'center',  padding : '5%', height : 90, width : 90, alignItems : 'center', display : 'flex', flexDirection : 'column', gap : 3}}>
            <Image style={{flex : 1, resizeMode : 'center', width : 90, height : 90}} source={source}/>

        </TouchableOpacity>
        
    )


}

