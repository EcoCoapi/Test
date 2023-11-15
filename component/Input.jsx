import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import HideShow from "./HideShow";

export default function Input({width, mdp, text, keyboard, placeholder, value, setValue, errorMessage}) {

    const [hideMdp, setHideMdp] = useState(mdp === null ? null : true)


    return (
        <View style={{width : width ? width : "85%"}}>
            <Text style={styles.text}>{text}</Text>
            {
                mdp === null ? 
                <TextInput  style={styles.textInput} keyboardType={keyboard} placeholder={placeholder} value={value} onChangeText={setValue}/> :
                <View style={{display : 'flex', flexDirection : 'row', alignItems : "center", gap : 5}}>
                    <TextInput secureTextEntry={hideMdp} style={styles.textInput} keyboardType={keyboard} placeholder={placeholder} defaultValue={value ? value : null} value={value} onChangeText={setValue}/>
                    <HideShow state={hideMdp} setState={setHideMdp}/>
                </View>  
            }
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    )

}

const styles = StyleSheet.create({
    errorText : {
        color : '#f00', 
        fontWeight : "200", 
        fontSize : 12,
        fontStyle : "italic"


    },


    textInput : {
        width : "100%", 
        height : 40,
        backgroundColor : "#D9D9D9", 
        paddingHorizontal : "4%", 
        textAlign : 'left', 
        borderRadius : 15, 
        marginBottom : 10
        
    }, 
    text :{
        fontWeight : '100',
        fontSize : 15,
        marginBottom : 5
    }
})