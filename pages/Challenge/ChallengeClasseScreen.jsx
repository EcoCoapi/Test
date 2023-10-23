import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import NavBar from './../../component/NavBar';
import { GlobalStateContext } from "../../global";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Seance from "../../component/Seance";

export default function ChallengeClasseScreen({navigation}) {

    const {isAdmin, currentChallenge} = useContext(GlobalStateContext)

    const [isLoad, setIsLoad] = useState(false)
    const [listeSeance, setListeSeance] = useState([])

    const loadData = () => {
        setIsLoad(false)

        const newList = listeSeance
        for (let index = 1; index < 10; index++) {
            newList.push(<Seance key={index} navigation={navigation} name={`Seance ${index}`}/>)
            
        }
        setListeSeance(newList)
        setIsLoad(true)
    }

    const handleGoEdit = () => {
        navigation.navigate("Edit-Challenge")
    }

    const handleAddSeance = () => {
        navigation.navigate("Add-Seance")
    }

    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Challenge Classe Screen"}/>
            <View style={styles.container}>
                {isAdmin ? <Button title="Modifier les informations du challenge" onPress={handleGoEdit}/> : null}
                <Text style={styles.text}>{currentChallenge}</Text>
                <ScrollView style={{backgroundColor : "#fff", width : "100%"}}>
                    {isLoad ? listeSeance.map(seance => seance) : null}
                </ScrollView>
                {isAdmin ? <Button title={"Ajouter une séance"} onPress={handleAddSeance}/>: null}
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>

    )



}

const styles = StyleSheet.create({

    container : {
        paddingTop : 0,
        height : "92%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center', 
        justifyContent : 'center',
        alignSelf : 'center', 
        width : "100%",
        backgroundColor : "#e0f5ae",
        gap : 50,
        padding : 10
    }, 
    textInput : {
        borderStyle : 'solid',
        borderWidth : 1, 
        width : "100%", 
        height : 50,
        backgroundColor : "#fff", 
        textAlign : 'center'
    }, 
    text :{
        fontWeight : 'bold',
        fontSize : 20,
    }
})