import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";
import { useNavigation } from "@react-navigation/native";

export default function Groupe({groupe, owner, action, disable}) {

    const navigation = useNavigation()

    const {setCurrentGroupeChallengeEco, currentClasse} = useContext(GlobalStateContext)

    const [id, setId] = useState(null)
    const [listeClasse, setListeClasse] = useState([]) 
    const [isIn, setIsIn] = useState(false)

    const handleGoGroupe = () => {
        console.log("groupe")
        setCurrentGroupeChallengeEco(groupe)
        navigation.navigate("Groupe-Challenge-Eco")

    }

    const load = () => {

        groupe.listeClasse.slice(0, -1).split("|").map(c => {
            c === currentClasse.id_classe ? setIsIn(true) : null
        })
        

    }


    return (
        <TouchableOpacity onLayout={load} style={[styles.container, {backgroundColor : owner ? "#f00" : "#3D1E7B" }]} onPress={action} disabled={disable}>
            <Text style={styles.text}>{groupe.nom}</Text>
            
                <Text style={{margin : "2%", color : "#fff"}}>{`${groupe.listeClasse.slice(0, -1).split("|").length} Classe${groupe.listeClasse.slice(0, -1).split("|").length == 1 ? "" : "s"}`}</Text>
                <Text style={{fontWeight : '500', fontSize : 14, backgroundColor : groupe.isPublic === 0 ? "#FAC172" : "#00BF63", padding : 4, borderWidth : 2, borderStyle : 'solid', textAlign : 'center', verticalAlign : 'middle', borderColor : '#FFF', borderRadius : 4}}>{groupe.isPublic === 0 ? "Privé" : "Public"}</Text>
        </TouchableOpacity>


    )

}

const styles = StyleSheet.create({

    container : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around', 
        padding : '3%', 
        margin : "3%", 
        opacity : 0.7, 
        borderWidth : 2, 
        borderStyle : 'solid', 
        borderRadius : 10
    
    },
    text : {
        color : "#eee",
        height : "100%",
        textAlignVertical : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        width : "60%"
    }, 
    image : {
        
        width : 30,
        height : 30
    }
})
