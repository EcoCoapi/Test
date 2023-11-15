import React, { useContext, useState } from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import { GlobalStateContext } from '../../global'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import HomeScreenButton from '../../component/HomeScreenButton'
import CustomButton from '../../component/CustomButton'



export default function FirstScreen ({navigation}) {

    const {isAdmin} = useContext(GlobalStateContext)
    const [text, setText] = useState(null)


    const handleGoLogin = () => {
        
        navigation.navigate("Log")
    }

    const handleGoSingIn = () => {

        navigation.navigate("Sign")
    }

    const handleGoHome = () => {
        navigation.navigate('Home')
    }


    return (


        <LinearGradient
        colors={['#00BF63', '#FDD54F']} 
        style={styles.gradient}
        >
            <View style={styles.viewEco}>
                <Text style={styles.textEco}>Bienvenue sur Eco Eco mobile</Text>
                <CustomButton color={"#fff"} text={"SE CONNECTER"} textColor={"#F6973D"} width={"65%"} action={handleGoLogin}/>
                <CustomButton color={"#fff"} text={"S'INSCRIRE"} textColor={"#F6973D"} width={"65%"} action={handleGoSingIn}/>
                {isAdmin ?<CustomButton color={"#fff"} text={"ACCEUIL"} textColor={"#F6973D"} width={"65%"} action={handleGoHome}/> : null}
            </View>

            <View style={{flex : 1, gap :  10 , flexDirection : 'column',  backgroundColor : "#fff", borderTopLeftRadius : 500, paddingHorizontal : "5%"}}>
                <View style={{flex : 1, width : "100%", display : 'flex', flexDirection : 'column', alignItems : 'flex-end', justifyContent : 'flex-end', gap : 15}}>
                    <Image style={{padding : "10%", borderWidth : 1, borderColor : '#000', width : "52%", height : "20%",  resizeMode :"center"}}source={require('../../assets/coapi.png')}/>
                    <Image style={{padding : "10%", borderWidth : 1, borderColor : '#000', width : "45%", height : "20%", resizeMode :"center"}}source={require('../../assets/eigsi.jpg')}/>
                </View>
                <Image style={{ width : "60%", height : "40%", resizeMode :"center"}}source={require('../../assets/bike.png')}/>

            </View>
            


        </LinearGradient>


    )


}

const styles = StyleSheet.create({

    viewEco : {
        flex : 1, 
        width : "100%", 
        display : 'flex', 
        flexDirection :'column',

        paddingTop : "23%", 
        paddingHorizontal : "15%",
        gap : 10
    },

    textEco : {
        color : '#fff',
        fontWeight : 'bold', 
        fontSize : 40, 

    },

    gradient : {
        
        display : 'flex',
        flexDirection : 'column',
        height : '100%',
        flexWrap :'wrap', 
    },

    navbar : {
        flexGrow : 1,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 

    footer : {
        flexGrow : 1,

        backgroundColor : '#EFE4E1'
    },
    image : {
        alignSelf : 'flex-start',
        width : 30,
        height : 30
    },

    container : {
        flexGrow : 3,
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center', 
        width : "100%",
        justifyContent :'space-around',
        gap : 10
    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : 'bold',
        fontSize : 40,
    }

})