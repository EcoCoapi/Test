import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStateContext } from "../global";

export default function SeanceEco({navigation, name}) {


    const {currentSeanceEco, setCurrentSeanceEco} = useContext(GlobalStateContext)
    const [nom, setNom] = useState(name)

    const [id, setId] = useState(null)
    const [idEco, setIdEco] = useState(null)
    const [date, setDate] = useState(null)
    const [nbVelo, setNbVelo] = useState(null)
    const [nbBus, setNbBus] = useState(null)
    const [nbPied, setNbPied] = useState(null)
    const [nbTrot, setNbTrot] = useState(null)
    const [nbVoiture, setNbVoiture] = useState(null)
    const [nbCovoit, setNbCovoit] = useState(null)
    const [points, setPoints] = useState(null)

    const handleGoSeanceEco = () => {
        setCurrentSeanceEco(nom)
        navigation.navigate("Seance-Eco")
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{nom}</Text>
            <Pressable onPress={handleGoSeanceEco}>
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
