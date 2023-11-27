import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../component/Input";
import DropDown from "../../component/DropDown";
import { GlobalStateContext } from "../../global";
import CustomButton from "../../component/CustomButton";
import axios from "axios";

export default function AddClasseScreen({navigation}) {

    const {listeNiveau, url, currentUser, currentEcole} = useContext(GlobalStateContext)

    const [nbEleve, setNbEleve] = useState(null)
    const [niveau, setNiveau] = useState(null)


    const handleCreateClasse = async () => {
        let n

        listeNiveau.map(niv => niv.value === niveau ? n = niv.label : null)

        const body = {
            idEcole : currentUser.id_ecole, 
            niveau : n, 
            nbEleve : nbEleve, 
            mailProf : currentUser.mail

        }

        await axios.post(`${url}/classe`, body)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            consolelog(error)
        })


        console.log(body)

        navigation.navigate('Ecole')
    }





    return (
        
        <LinearGradient
            colors={['#5DE0E6', '#004AAD']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
        >

            <View style={styles.navbar}>
                <ReturnPreviousScreen enable titre={'Add classe'} />
            </View>
            <Input value={nbEleve} setValue={setNbEleve} placeholder={"0"} keyboard={'number-pad'} text={"Nombre d'élèves"} mdp={null}/>
            <DropDown type={"Niveau"} value={niveau} setValue={setNiveau}  data={listeNiveau} labelField={'label'} valueField={'value'} placeholder={'CE1'}/>
            <CustomButton text={"Valider"} color={"#3D1E7B"} textColor={"#fff"} width={"50%"} action={handleCreateClasse}/>
        </LinearGradient>
        

        /*
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
        */
    )
}
const styles = StyleSheet.create({
    containerClasse : {
        flex : 1, 
        backgroundColor : "#737373", 
        marginHorizontal: 30,
        padding : 10, 
        alignItems : 'center',
        opacity : 0.7,
        borderWidth : 2, 
        borderStyle : "solid", 
        borderRadius : 5, 
        marginBottom : "3%"
    },
    text2 : {
        color : "#fff",
        fontWeight : '400',
        fontSize : 21, 
        textAlign : 'center'
    }, 
    image : {
        
        width : 70,
        height : 70
    },


    profile : {
        width : 140, 
        height : 140,
        borderRadius : 170/2,
        borderColor : '#3D1E7B',
        borderWidth : 8, 

    },
    
    gradient : {
        paddingTop : '3%',
        alignItems : 'center',
        width : "100%", 
        height : "100%", 
        gap : 40,
        alignItems : 'center' 
    }, 
    navbar : {
        top : 0,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 
    container : {
        padding : "2%",
        width : "100%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center',
        gap : 8
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
        color : "#fff", 
        opacity : 0.8
    }
})