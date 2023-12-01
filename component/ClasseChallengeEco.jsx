import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";

const ClasseSource = "../assets/Admin/classe.png"

const color1 = "#721E49"
const color2 = "#913275"
const color3 = "#CE5888"

export default function ClasseChallengeEco ({navigation, item, disable, ecole, position, action}) {

    const {currentClasse, setCurrentClasse, url} = useContext(GlobalStateContext)

    
    const [id, setId] = useState(item.idClasse);
    const [niveau, setNiveau] = useState(item.niveau)
    const [nbEleve, setNbEleve] = useState(item.nbEleves)
    const [mailProf, setMalProf] = useState(item.maiProf)
    const [idChall, setIdChall] = useState(item.idChallenge)
    const [isLoad, setIsLoad] = useState(false)

    const [nomEcole, setEcole] = useState(null)




    const getColor = (p) => {

        if(item.idClasse == currentClasse.idClasse ) return "#ff0" 
        
        switch(p%3){
            case 0 :
                return color1
            case 1 :
                return color2
            case 2 :
                return color3
            default :
                return color1
        }
    }

    const getEcole = async () => {
        const response = await fetch(`${url}/ecole/${item.idEcole}`)
        const data = await response.json()
        setEcole(data[0])
        setIsLoad(true)
    }

    return (
        <TouchableOpacity style={[styles.container, {backgroundColor : getColor(position)}]} onLayout={getEcole} onPress={action}>
            
            <Text style={{flex : 1, color : "#303D36",fontWeight : 'bold', fontSize : 15, textAlignVertical : 'center', textAlign : 'center', backgroundColor : "#6CE5E8", borderWidth : 2, borderRadius : 15, borderStyle : 'solid', paddingHorizontal : 5, paddingVertical : 0,   borderColor : "#fff"}}>{position + 1}</Text>
            <Text style={{flex : 1, color : "#fff",fontWeight : '400', fontSize : 9, textAlignVertical : 'center', textAlign : 'center', backgroundColor : "#000", borderWidth : 2, borderRadius : 5, borderStyle : 'solid', padding : 3, borderColor : "#fff"}}>{niveau}</Text>
            <View style={{flex : 8}}>
                <Text style={{fontStyle : 'italic', fontWeight : "bold", color : "#fff", fontSize : 10}}>{nomEcole ? nomEcole.nom : null}</Text>
                <Text style={{ fontWeight : "400", fontSize : 9}}>{nomEcole ? nomEcole.ville : null}</Text>
            </View>
            
        </TouchableOpacity>


    )

}

const styles = StyleSheet.create({

    container : {
        margin : 2, 
        alignSelf : 'flex-start',
        display : 'flex', 
        flexDirection : 'row',
        gap : 5 ,
        padding : 10, 
        alignItems : 'center',
        opacity : 0.8,
        borderWidth : 2, 
        borderStyle : "solid", 
        borderRadius : 5
    },
    text : {
        fontWeight : 'bold',
        fontSize : 18
    }, 

})
