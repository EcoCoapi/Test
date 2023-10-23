import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStateContext } from "../global";

export default function Seance({navigation, name}) {


    const {currentSeance, setCurrentSeance} = useContext(GlobalStateContext)
    const [nom, setNom] = useState(name)

    const [id, setId] = useState(null)
    const [idChallenge, setIdChallenge] = useState(null)
    const [idClasse, setIdClasse] = useState(null)
    const [date, setDate] = useState(null)
    const [duree, setDuree] = useState(null)
    const [desc, setDesc] = useState(null)

    const handleGoSeance = () => {
        setCurrentSeance(nom)
        navigation.navigate("Seance")
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{nom}</Text>
            <Pressable onPress={handleGoSeance}>
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
