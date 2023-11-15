import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStateContext } from "../global";

const ClasseSource = "../assets/Admin/classe.png"

export default function Classe({navigation, name, nb}) {

    const {currentClasse, setCurrentClasse} = useContext(GlobalStateContext)

    
    const [id, setId] = useState(null);
    const [nom, setNom] = useState(name);
    const [niveau, setNiveau] = useState(null)
    const [nbEleve, setNbEleve] = useState(null)
    const [mailProf, setMalProf] = useState(null)
    const [idChall, setIdChall] = useState(null)


    const hanldeGoClasse = () => {
        setCurrentClasse(nom)
        navigation.navigate("Classe")
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require(ClasseSource)}/>
            <Text style={{color : "#fff",fontWeight : '400', fontSize : 21}}>{name}</Text>
            <Text style={{color : "#fff",fontWeight : '300', fontSize : 13}}>{`${nb} elèves`}</Text>
        </View>


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
