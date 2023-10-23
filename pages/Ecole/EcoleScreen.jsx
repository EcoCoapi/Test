import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";
import Classe from "../../component/Classe";

export default function EcoleScreen({navigation}) {

    const {currentEcole, isAdmin} = useContext(GlobalStateContext)

    const[isLoad, setIsLoad] = useState(false)
    const[listeClasse, setListeClasse] = useState([])

    const handleGoEdit = () => {
        navigation.navigate("Edit-Ecole")
    }
    const loadData = () => {
        setIsLoad(false)

        const newList = listeClasse
        newList.push(<Classe key={1} navigation={navigation} name={"Classe 1"}/>)
        newList.push(<Classe key={2} navigation={navigation} name={"Classe 2"}/>)

        setListeClasse(newList)
        setIsLoad(true)
    }

    const hanldeGoAddClasseScreen = () => {
        navigation.navigate("Add-Classe")
    }

    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Ecole Screen"}/>
            <View style={styles.container}>
                {isAdmin ? <Button title="Modifier les informations de l'école" onPress={handleGoEdit}/> : null}
                <Text style={styles.text}>{currentEcole}</Text>
                <ScrollView style={{backgroundColor : "#fff", width : "100%"}}>
                    {isLoad ? listeClasse.map(classe => classe) : null}
                </ScrollView>
                {isAdmin ? <Button title={"Ajouter une classe"} onPress={hanldeGoAddClasseScreen}/>: null}
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