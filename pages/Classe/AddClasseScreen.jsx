import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

export default function AddClasseScreen({navigation}) {

    const handleCreateClasse = () => {
        navigation.goBack()
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Add-Classe Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création d'une classe</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <TextInput style={styles.textInput} placeholder="Niveau" />
                <TextInput style={styles.textInput} placeholder="Nombre d'élève" />
                <Button onPress={handleCreateClasse} title="Créer la classe"/>
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