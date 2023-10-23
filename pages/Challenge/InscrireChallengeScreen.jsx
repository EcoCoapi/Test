import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { Dropdown } from "react-native-element-dropdown";


export default function InscrireChallenge({navigation}) {


    const [classe, setClasse] = useState(null)

    const data = [
        { label : 'Classe 1', value : '1'},
        { label : 'Classe 2', value : '2'}
    ]

    const loadData = () => {
        //Fonction pour charger les différents classes de l'admin

    }

    const handleIncriptionChallene = () => {
        //Fonction pour inscrire une classe à un challenge
        navigation.goBack()
    }


    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Inscription Challenge Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Incription à un challenge</Text>
                <Dropdown
                    data={data}
                    style={{
                        height : 30, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder='Choisir une classe'
                    value={classe}
                    onChange={item => {
                        setClasse(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />  
                <Button title="S'inscrire" onPress={handleIncriptionChallene}/>
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
        alignSelf : 'center', 
        alignItems : 'center',
        justifyContent : 'center',
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