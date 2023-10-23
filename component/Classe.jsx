import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStateContext } from "../global";

export default function Classe({navigation, name}) {

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
            <Text styles={styles.text}>{nom}</Text>
            <Pressable onPress={hanldeGoClasse}>
                <Image style={styles.image} source={require('../assets/rightArrow.png')}/>
            </Pressable>
        </View>


    )

}

const styles = StyleSheet.create({

    container : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingTop : 30,
        paddingLeft : 10,
    
    },
    text : {
        fontWeight : 'bold',
        fontSize : 18
    }, 
    image : {
        
        width : 30,
        height : 30
    }
})
