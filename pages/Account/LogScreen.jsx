import React, { useContext, useState } from 'react'
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native'
import NavBar from '../../component/NavBar'
import { GlobalStateContext } from '../../global'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import axios from 'axios'
import CustomButton from '../../component/CustomButton'
import { LinearGradient } from 'expo-linear-gradient'
import HideShow from '../../component/HideShow'
import Input from '../../component/Input'



export default function LogScreen ({navigation}) {

    const {isAdmin, setAdmin, url} = useContext(GlobalStateContext)

    const [mail, setMail] = useState(null)
    const [mdp, setMdp] = useState(null)


    const [hidePassword, setHidePassword] = useState(true)

    

    const handleLogIn = async () => {
        //Ajouter la fonction de conection
        
        const body = {
            mail : mail 
        }


        const data = await axios.get(`https://app-6ce05b9a-0764-405a-b307-00ab053ef906.cleverapps.io/comptes`, body)
        console.log(data.data)

       //navigation.navigate('Home')
    }

    const handleGoToSignIn = () => {
        navigation.navigate('Sign')
    }

    return (
        
        <LinearGradient
        colors={['#00BF63', '#FDD54F']} 
        style={styles.gradient}
        >
            <View>

                <LinearGradient
                colors={['#7ED957', '#FDD54F']} 
                style={{position : "aboslute", right : 520, bottom : 180,  width : 720, height : 720, borderRadius : 500}}
                >
                    
                </LinearGradient>
                <View style={{position : "absolute",alignItems :"center", top: "15%",  width : "100%", height : 150}} >
                    <Image style={{width : 150, height : "100%"}}source={require("../../assets/LoginScreen/utilisateur.png")}/>



                </View>



            </View>
            
                <View style={styles.container}>
                    <Text style={styles.textConnect}>Se connecter</Text>
                    <Input placeholder={"welcome@eco-eco.com"} text={"Email"} keyboard={'email-adress'} value={mail} setValue={setMail} mdp={null}/>
                    <Input placeholder={"*****************"} text={"Mot de passe"} value={mdp} setValue={setMdp} mdp={true} />
                    <CustomButton width={"40%"} height={"10%"} color={"#F6973D"} text={'Connexion'} textColor={"#fff"}/>
            
                    <View style={{alignItems : 'center', gap : 5}}>
                        <Text style={styles.text2}>Mot de passe oublié ?</Text>
                        <Text style={styles.text2}>Pas de compte ? S'inscrire</Text>

                    </View>


                </View>

        </LinearGradient>

    )
}

            /*<TextInput style={styles.textInput} placeholder='Email' value={mail} onChangeText={setMail}/>
            <TextInput style={styles.textInput} placeholder='Mot de passe'value={mdp} onChangeText={setMdp}/>
            <CustomButton width={"80%"} height={"5%"} color={"#F6973D"} text={'Connexion'}/>
            <Button title="S'inscrire" onPress={handleGoToSignIn}></Button>
            <ReturnPreviousScreen navigation={navigation}/>*/

const styles = StyleSheet.create({

    textConnect : {
        fontSize : 40,  
        fontWeight : "500", 
        textAlign : 'center', 
        textAlignVertical : 'center', 
        marginBottom : 20, 
    },
    
    gradient : {
        paddingTop : '3%',
        height : '100%',
        zIndex : -1,
    },

    connectButton : {
        borderRadius : 50
    },

    container : {
        position : "absolute",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center', 
        backgroundColor : "#fff",
        height : "60%",
        bottom : 0,
        width : "100%",
        borderTopLeftRadius : 40,
        borderTopRightRadius : 40,
        paddingVertical : "10%", 
        paddingHorizontal : "3%",
        gap : 15
    }, 
    textInput : {
        width : "100%", 
        height : 40,
        backgroundColor : "#D9D9D9", 
        paddingHorizontal : "4%", 
        textAlign : 'left', 
        borderRadius : 15, 
        marginBottom : 10
        
    }, 
    text :{
        fontWeight : '100',
        fontSize : 15,
        marginBottom : 5
    },
    text2 :{
        fontWeight : '100',
        fontSize : 15,
    }
})