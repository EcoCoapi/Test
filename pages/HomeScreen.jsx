import React, { useContext, useState } from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import NavBar from '../component/NavBar'
import { GlobalStateContext } from '../global'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnPreviousScreen from '../component/ReturnPreviousScreen'
import HomeScreenButton from '../component/HomeScreenButton'



export default function HomeScreen ({navigation}) {

    const {isAdmin} = useContext(GlobalStateContext)
    const [text, setText] = useState(null)


    const handleGoAdmin = () => {
        
        navigation.navigate("Admin")
    }

    const handleGoDocs = () => {

        navigation.navigate("Docs")
    }

    const handleGoEcoles = () => {
        navigation.navigate("Ecoles")
    }

    const handleGoChallenges = () => {
        navigation.navigate("Challenges")
    }

    return (


        <LinearGradient 
            colors={['#CDFFD8', '#94B9FF']} 
            style={styles.gradient} 
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
        >   
            <View style={styles.navbar}>
                <ReturnPreviousScreen titre='Bienvenue' navigation={navigation}/>
            </View>
            <View style={styles.container}>
                <HomeScreenButton type={'Documents'} cote={0} action={handleGoDocs}/>
                <HomeScreenButton type={'Ecoles'} cote={1} action={handleGoEcoles}/>
                <HomeScreenButton type={'Challenges'} cote={0} action={handleGoChallenges}/>
                <HomeScreenButton type={'Admin'} cote={1} action={handleGoAdmin}/>

            </View>
            <View style={styles.footer}>
                <Text style={{textAlign : 'center', fontSize : 20}}>Page d'acceuil</Text>
            </View>
     
            
        </LinearGradient>


    )


}

const styles = StyleSheet.create({

    gradient : {
        
        paddingTop : '3%',
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