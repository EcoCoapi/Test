import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";

const ClasseSource = "../assets/Admin/classe.png"

export default function Classe({navigation, item, disable, ecole}) {

    const {currentClasse, setCurrentClasse, url} = useContext(GlobalStateContext)

    
    const [id, setId] = useState(item.idClasse);
    const [niveau, setNiveau] = useState(item.niveau)
    const [nbEleve, setNbEleve] = useState(item.nbEleves)
    const [mailProf, setMalProf] = useState(item.maiProf)
    const [idChall, setIdChall] = useState(item.idChallenge)
    const [isLoad, setIsLoad] = useState(false)

    const [nomEcole, setEcole] = useState(null)


    const hanldeGoClasse = () => {
        setCurrentClasse(item)
        navigation.navigate("Classe")
    }

    const getEcole = async () => {
        const response = await fetch(`${url}/ecole/${item.idEcole}`)
        const data = await response.json()
        console.log(data)
        setEcole(data[0])
        setIsLoad(true)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={hanldeGoClasse} disabled={disable} onLayout={ecole ? getEcole : null}>
            <Image style={styles.image} source={require(ClasseSource)}/>
            <Text style={{color : "#fff",fontWeight : '400', fontSize : 21}}>{niveau}</Text>
            <Text style={{color : "#fff",fontWeight : '300', fontSize : 13}}>{`${nbEleve} elèves`}</Text>
            {ecole && isLoad? <Text style={{fontStyle : 'italic'}}>{nomEcole ? nomEcole.nom : null}</Text> : null}
            {ecole && isLoad? <Text style={{fontStyle : 'italic'}}>{nomEcole ? nomEcole.ville : null}</Text> : null}
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
