import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Switch } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

export default function AddGroupeChallengeEcoScreen({navigation}) {

    

    const [listeEcoleGroupe, setListeEcoleGroupe] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const [mdp, setMdp] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false)
    const handleSwitch = () => {
        setIsEnabled(!isEnabled)
    }

    const handleCreateGroupe = () => {
        //Fonction pour créer un grouope dans la BDD

        navigation.goBack()
    }

    const handleAddEcoleGroupe = () => {
        setIsLoad(false)


        const newList = listeEcoleGroupe
        newList.push(`Ecole n°${newList.length}`)
        setListeEcoleGroupe(newList)
        setIsLoad(true)
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Add-Groupe-Eco Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création d'une groupe</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <View style={styles.toggle}>
                    <Text>Le groupe est-il privé ?</Text>
                    <Switch value={isEnabled} onChange={handleSwitch}/>
                </View>
                {isEnabled ? <TextInput style={styles.textInput} placeholder="Mot de passe" value={mdp} onChange={setMdp}/> : null}
                <Button title="Ajouter une école" onPress={handleAddEcoleGroupe}/>
                <ScrollView style={{
                    width : "100%",
                    backgroundColor : "#fff"
                }}>
                    {isLoad ? listeEcoleGroupe.map(ecole => <Text key={ecole}>{ecole}</Text>) : null}
                </ScrollView>
                <Button onPress={handleCreateGroupe} title="Créer le groupe"/>
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toggle : {
        display : "flex", 
        flexDirection : 'row',
        alignItems : 'center', 
        backgroundColor : '#fff',
        width : "100%",
        justifyContent : 'center'
    },

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