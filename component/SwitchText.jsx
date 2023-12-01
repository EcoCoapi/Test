import React from "react";
import { Switch, View , Text} from "react-native";

export default function SwitchText({value, setValue, titre}){


    return (
        <View style={{backgroundColor : '#F8F8F8', borderRadius : 10, borderWidth : 1, borderStyle : "solid", padding : "2%", display : 'flex', flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center'}}>
            <Text style={{fontWeight : "300", fontSize : 13}}>{titre}</Text>
            <Switch style={{borderWidth : 1, borderStyle : "solid",}}  trackColor={"f00"}  value={value} onChange={() => setValue(!value)}/>

        </View>



    )

}