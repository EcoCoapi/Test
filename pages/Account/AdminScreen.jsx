import React from 'react'
import { View , StyleSheet, TextInput, Button, Text} from 'react-native'
import NavBar from '../../component/NavBar'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'


export default function AdminScreen({navigation}) {

    const handleEditAdmin = () => {
        navigation.navigate('Home')
    }


    return (
        <View>
            <NavBar navigation={navigation} screenName={'Admin Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Modification du profile</Text>
                <TextInput style={styles.textInput} placeholder='Nom'/>
                <TextInput style={styles.textInput} placeholder='Prénom'/>
                <TextInput style={styles.textInput} placeholder='Email'/>
                <TextInput style={styles.textInput} placeholder='Mot de passe'/>
                <Button title='Modifier le profil' onPress={handleEditAdmin}/>
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