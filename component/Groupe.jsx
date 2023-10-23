import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { GlobalStateContext } from "../global";

export default function Groupe({navigation, name, prive}) {

    const {setCurrentGroupeChallengeEco} = useContext(GlobalStateContext)

    const [id, setId] = useState(null)
    const [nom, setNom] = useState(name)
    const [isPrive, setIsPrive] = useState(prive)
    const [listeClasse, setListeClasse] = useState([]) 

    const handleGoGroupe = () => {
        setCurrentGroupeChallengeEco(nom)
        navigation.navigate("Groupe-Challenge-Eco")

    }


    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{name}</Text>
            <Pressable onPress={handleGoGroupe}>
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
