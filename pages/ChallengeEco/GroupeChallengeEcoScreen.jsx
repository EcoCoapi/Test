import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Groupe from "../../component/Groupe";
import { GlobalStateContext } from "../../global";
import SeanceEco from "../../component/SeanceEco";

export default function GroupeChallengeEcoScreen({navigation}) {


    const {currentGroupeChallengeEco, isAdmin} = useContext(GlobalStateContext)


    const[listeSeanceEco, setListeSeanceEco] = useState([])

    const[isLoad, setIsLoad] = useState(false)

    const handleGoAddSeanceEco = () => {
        navigation.navigate("Add-Seance-Eco")
    }

    const handleGoEditGroupe = () => {
        navigation.navigate("Edit-Groupe-Eco")
    }

    const loadData = () => {

        //Fonction pour charger les groupes
        setIsLoad(false)

        const newList = listeSeanceEco
        for (let index = 1; index < 10; index++) {
            newList.push(<SeanceEco key={index} navigation={navigation} name={`Seance ECO ${index}`} prive={false}/>)
            
        }
        setListeSeanceEco(newList)
        setIsLoad(true)
    }

    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Groupe Challenge ECO-ECO"}/>
            <View style={styles.container}>
            {isAdmin ?<Button title="Modifier le groupe" onPress={handleGoEditGroupe}/> : null}
                <Text style={styles.text}>{currentGroupeChallengeEco}</Text>
                <Text>Informations sur le groupe</Text>

                <ScrollView style={{
                    width : "100%",
                    backgroundColor : "#fff"
                }}>
                    {isLoad ? listeSeanceEco.map(groupe => groupe) : null}
                </ScrollView>
                {isAdmin ? <Button title="Ajouter un séance pour son école" onPress={handleGoAddSeanceEco}/> : null}
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
    container2 : {
        display : 'flex',
        flexDirection : 'row', 
        alignItems : 'center',
        backgroundColor : "#7649E8"

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
    }, 
    text2 :{
        fontWeight : 'bold',
        fontSize : 30,
    }, 
    image : {
        
        width : 30,
        height : 30
    }
})