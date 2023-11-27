import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";

const ClasseSource = "../assets/Admin/classe.png"

export default function Classe({navigation, name, nb, item, disable}) {

    const {currentClasse, setCurrentClasse} = useContext(GlobalStateContext)

    
    const [id, setId] = useState(item.idClasse);
    const [niveau, setNiveau] = useState(item.niveau)
    const [nbEleve, setNbEleve] = useState(item.nbEleves)
    const [mailProf, setMalProf] = useState(item.maiProf)
    const [idChall, setIdChall] = useState(item.idChallenge)


    const hanldeGoClasse = () => {
        setCurrentClasse(item)
        navigation.navigate("Classe")
    }

    return (
        <TouchableOpacity style={styles.container} onPress={hanldeGoClasse} disabled={disable}>
            <Image style={styles.image} source={require(ClasseSource)}/>
            <Text style={{color : "#fff",fontWeight : '400', fontSize : 21}}>{niveau}</Text>
            <Text style={{color : "#fff",fontWeight : '300', fontSize : 13}}>{`${nbEleve} elèves`}</Text>
        </TouchableOpacity>


    )

}

const styles = StyleSheet.create({

    container : {
        backgroundColor : "#737373", 
        margin : 10,
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
    image : {
        
        width : 70,
        height : 70
    }
})
