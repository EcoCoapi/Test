import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Switch } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";

export default function EditGroupeChallengeEcoScreen({navigation}) {

    const {currentGroupeChallengeEco} = useContext(GlobalStateContext)

    const [listeEcoleGroupe, setListeEcoleGroupe] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const [isEnabled, setIsEnabled] = useState(false)
    const [mdp, setMdp] = useState(null)
    const handleSwitch = () => {
        setIsEnabled(!isEnabled)
    }



    const handleEditGroupe = () => {
        //Fonction pour modifier un grouope dans la BDD

        navigation.goBack()
    }
    const handleDeleteGroupe = () => {
        //Fonction pour modifier un grouope dans la BDD

        navigation.goBack()
    }

    const handleEditEcoleGroupe = () => {
        setIsLoad(false)


        const newList = listeEcoleGroupe
        newList.push(`Ecole n°${newList.length}`)
        setListeEcoleGroupe(newList)
        setIsLoad(true)
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Edit-Groupe-Eco Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Modification d'un groupe</Text>
                <TextInput style={styles.textInput} placeholder="Nom" value={currentGroupeChallengeEco}/>
                <View style={styles.toggle}>
                    <Text>Le groupe est-il privé ?</Text>
                    <Switch value={isEnabled} onChange={handleSwitch}/>
                </View>
                {isEnabled ? <TextInput style={styles.textInput} placeholder="Mot de passe" value={mdp} onChange={setMdp}/> : null}
                <ScrollView style={{
                    width : "100%",
                    backgroundColor : "#fff"
                }}>
                    {isLoad ? listeEcoleGroupe.map(ecole => <Text key={ecole}>{ecole}</Text>) : null}
                </ScrollView>
                <Button onPress={handleEditGroupe} title="Modifier le groupe"/>
                <Button onPress={handleDeleteGroupe} title="Supprimer le groupe"/>

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