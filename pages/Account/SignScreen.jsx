import React, { useState } from 'react'
import { View , StyleSheet, TextInput, Button, Text, Pressable} from 'react-native'
import NavBar from '../../component/NavBar'
import { Dropdown } from 'react-native-element-dropdown'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'


export default function SignScreen({navigation}) {

    const handleCreateAdmin = () => {
        navigation.navigate('Home')
    }

    const handleCreateEcole = () => {
        navigation.navigate('Cre-Ecole')
    }

    const [value , setValue] = useState(null)

    const data = [
        { label : 'Ecole 1', value : '1'},
        { label : 'Ecole 2', value : '2'}
    ]


    return (
        <View >
            <NavBar navigation={navigation} screenName={'Admin Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création du profile</Text>
                <TextInput style={styles.textInput} placeholder='Nom'/>
                <TextInput style={styles.textInput} placeholder='Prénom'/>
                <TextInput style={styles.textInput} placeholder='Email'/>
                <TextInput style={styles.textInput} placeholder='Mot de passe'/>
                <Dropdown
                    data={data}
                    style={{
                        height : 30, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder='Choisir une école'
                    value={value}
                    onChange={item => {
                        setValue(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />
                <Pressable onPress={handleCreateEcole}>
                    <Text style={{fontStyle:'italic', fontSize : 10}}>Votre école n'est pas renseigné ? merci de lui créer un profile en cliquant sur cette phrase</Text>
                </Pressable>
                <Button title='Créer le profil' onPress={handleCreateAdmin}/>
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
        gap : 20,
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