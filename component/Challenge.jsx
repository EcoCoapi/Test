import React, { useContext, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";

export default function Challenge({navigation, name, viewChall}) {


    const {currentChallenge, setCurrentChallenge} = useContext(GlobalStateContext)

    const [id, setId] = useState(null)
    const [idEcole, setIdEcole] = useState(null)
    const [nom, setNom] = useState(name)
    const [desc, setDesc] = useState(null)
    const [dateD, setDateD] = useState(null)
    const [dateF, setDateF] = useState(null)
    const [ville, setVille] = useState(null)
    const [dept, setDept] = useState(null)
    const [region, setRegion] = useState(null)

    const handleGoChallenge = () => {
        setCurrentChallenge(nom)

    }

    return (
        <TouchableOpacity onPress={handleGoChallenge} style={styles.container}>
            <Text style={styles.text}>{nom}</Text>
        </TouchableOpacity>


    )

}

const styles = StyleSheet.create({

    container : {
        margin : "3%", 
        borderWidth : 3, 
        borderStyle : 'solid', 
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'center',
        padding : "4%", 
        backgroundColor : "#3D1E7B", 
        borderRadius : 11
    
    },
    text : {


        fontWeight : 'bold',
        fontSize : 18, 
        textAlignVertical : 'center', 
        color : "#fff"
    }, 

})
