import React, { useContext } from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import NavBar from '../../component/NavBar'
import { GlobalStateContext } from '../../global'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'



export default function LogScreen ({navigation}) {

    const {isAdmin, setAdmin} = useContext(GlobalStateContext)


    const handleLogIn = () => {
        //Ajouter la fonction de conection
        setAdmin(true)
        navigation.navigate('Home')
    }

    const handleGoToSignIn = () => {
        navigation.navigate('Sign')
    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Log Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Connectez-Vous</Text>
                <TextInput style={styles.textInput} placeholder='Email'/>
                <TextInput style={styles.textInput} placeholder='Mot de passe'/>
                <Button title="Se connecter" onPress={handleLogIn}></Button>
                <Button title="S'inscrire" onPress={handleGoToSignIn}></Button>
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