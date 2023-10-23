import React, { useState } from "react";
import { View , Text, StyleSheet, TextInput, Button} from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from "react-native-element-dropdown";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

export default function CreaEcole ({navigation}) {


    const listeDept = [
        {'value' : 33 , 'label' : 'Gironde'},
        {'value' : 17 , 'label' : 'Charente Maritime'}
    ]
    const listeType = [
        {'value' : 1 , 'label' : 'Urbaine'},
        {'value' : 2 , 'label' : 'Péri-Urbaine'},
        {'value' : 3 , 'label' : 'Rurale'}
    ]

    const [dept, setDept] = useState(null);
    const [type, setType] = useState(null);


    const handleCreateEcole = () => {
        //Fonction pour ajouter une école dans la BDD
        navigation.navigate('Home')
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Cre-Ecole Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création d'un profile école</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <TextInput style={styles.textInput} placeholder="Ville" />
                <Dropdown
                    data={listeDept}
                    style={{
                        height : 50, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder='Département'
                    value={dept}
                    onChange={item => {
                        setDept(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />
                <TextInput style={styles.textInput} placeholder="Nombre de lignes de BUS" />
                <TextInput style={styles.textInput} placeholder="Nombre de piste cyclable" />
                <TextInput style={styles.textInput} placeholder="Nombre de station de vélo" />
                <Dropdown
                    data={listeType}
                    style={{
                        height : 50, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder={`Type d'école`}
                    value={type}
                    onChange={item => {
                        setType(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />
                
                <Button onPress={handleCreateEcole} title="Créer le profile école"/>
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