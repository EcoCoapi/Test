import React, { useContext, useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStateContext } from "../global";

export default function SeanceEco({navigation, item}) {


    const {currentSeanceEco, setCurrentSeanceEco} = useContext(GlobalStateContext)


    const handleGoSeanceEco = () => {
        setCurrentSeanceEco(nom)
        navigation.navigate("Seance-Eco")
    }

    return (
        <View style={styles.container}>
            <Text style={{flex : 10, fontWeight : 'bold'}}>{item.points}</Text>
            <Text style={styles.text}>{item.date.split("T")[0].replace("-", "/").replace("-", "/")}</Text>
            <View style={{flex: 65, alignItems : 'center', justifyContent : 'center', flexDirection : 'row'}}>
                <Text style={styles.eco}>{item.nbVelo}</Text>
                <Text style={styles.eco}>{item.nbTC}</Text>
                <Text style={styles.eco}>{item.nbVoiture}</Text>
                <Text style={styles.eco}>{item.nbCoVoiture}</Text>
                <Text style={styles.eco}>{item.nbTrot}</Text>
                <Text style={styles.eco}>{item.nbPieton}</Text>
            </View>
        </View>


    )

}

const styles = StyleSheet.create({
    eco : {
        marginHorizontal : "2%", backgroundColor : "#6CE5E8", color : "#004F7C", borderRadius : 5, 
        flex : 1, textAlign : 'center', textAlignVertical : 'center'
    },
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        backgroundColor : "#E1EDC7", 
        padding : "1.5%",
        paddingVertical : "2%",
        gap : 2, 
        marginVertical : "1%",
        borderRadius : 10, 
        borderWidth : 1, 
        borderStyle : 'solid'

    
    },
    text : {
        flex : 25,
        fontWeight : '300',
        textAlign : 'center',
        fontSize : 14,
    }, 
    image : {
        
        width : 30,
        height : 30
    }
})
