import React, { useContext, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
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
        viewChall ? navigation.navigate("Challenge") : navigation.navigate("ChallengeClasse")
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{nom}</Text>
            <Pressable onPress={handleGoChallenge}>
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
