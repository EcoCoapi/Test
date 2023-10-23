

import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";

export default function EditClasseScreen({navigation}) {

    const {currentClasse} = useContext(GlobalStateContext)

    const handleEditCLasse = () => {
        //Fonction pour editer une classe de la BDD
        navigation.goBack()
    }
    const handleDeleteCLasse = () => {
        //Fonction pour supprimer une classe de la BDD
        navigation.goBack()
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Edit-Classe Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Modification d'une classe</Text>
                <TextInput style={styles.textInput} placeholder="Nom" value={currentClasse}/>
                <TextInput style={styles.textInput} placeholder="Niveau" />
                <TextInput style={styles.textInput} placeholder="Nombre d'élève" />
                <Button onPress={handleEditCLasse} title="Modifier la classe"/>
                <Button onPress={handleDeleteCLasse} title="Supprimer la classe"/>
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
        gap : 10,
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