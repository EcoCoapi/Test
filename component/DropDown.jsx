import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function DropDown({type, width, data, value, setValue, placeholder, errorMessage, labelField, valueField}) {

    const [choice, setChoice] = useState(value)
    const [isChange, setIsChange] = useState(false)

    const handleChange = (a) => {
        setIsChange(true)
        setChoice(a)
        setValue(a)
        setIsChange(false)
        console.log(a)
    }

    return (
        <View style={{width : width ? width : "85%"}}>
            <Text style={styles.text}>{type}</Text>
            <Dropdown
                    data={data}
                    style={{
                        height : 40, 
                        width : "100%",
                        backgroundColor : '#D9D9D9', 
                        borderStyle : 'solid',
                        borderRadius : 15, 
                        paddingHorizontal : "3%",
                    
                        
                    }}
                    search
                    searchPlaceholder={`Rechercher une ${type.toLowerCase()}`}
                    inputSearchStyle ={{backgroundColor : "#D9D9D9", borderRadius : 10}}
                    itemContainerStyle = {{display : 'flex', backgroundColor : "#D9D9D9", borderRadius : 10}}
                    containerStyle={{ borderRadius : 10,backgroundColor : "#FFF", shadowColor : 'tranparent', shadowRadius : 10}}
                    placeholderStyle={{color : "#adadad", paddingHorizontal : "3%"}}
                    placeholder={placeholder}
                    value={isChange ? value : choice}
                    onChange={item => {
                        handleChange(item.value)
                    }}
                    labelField={labelField}
                    valueField={valueField}
                
                />
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