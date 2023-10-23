import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Groupe from "../../component/Groupe";
import { GlobalStateContext } from "../../global";

export default function ChallengeEcoScreen({navigation}) {

    const{isAdmin} = useContext(GlobalStateContext)


    const[listeGroupe, setListeGroupEco] = useState([])

    const[isLoad, setIsLoad] = useState(false)


    const loadData = () => {

        //Fonction pour charger les groupes
        setIsLoad(false)

        const newList = listeGroupe
        for (let index = 1; index < 10; index++) {
            newList.push(<Groupe key={index} navigation={navigation} name={`Groupe ${index}`} prive={false}/>)
            
        }
        setListeGroupEco(newList)
        setIsLoad(true)
    }

    const handleGoAddGroupeEco = () => {

        navigation.navigate("Add-Groupe-Challenge-Eco")

     
    }

    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Challenge ECO-ECO"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Challenge ECO-ECO</Text>
                <Text>Description du challenge eco</Text>
                <ScrollView style={{
                    width : "100%",
                    backgroundColor : "#fff"
                }}>
                    {isLoad ? listeGroupe.map(groupe => groupe) : null}
                </ScrollView>
                {isAdmin ? <Button title="Ajouter un groupe" onPress={handleGoAddGroupeEco}/> : null}
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