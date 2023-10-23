import React, { useContext, useState } from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import NavBar from '../component/NavBar'
import { GlobalStateContext } from '../global'
import ReturnPreviousScreen from '../component/ReturnPreviousScreen'

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
        <View>
            <NavBar navigation={navigation} screenName={'Home Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{"ECO-ECO"}</Text>
                <Button style={styles.button} title='Documents' onPress={handleGoDocs}></Button>
                <Button style={styles.button} title='Ecoles' onPress={handleGoEcoles}></Button>
                <Button style={styles.button} title='Challenges' onPress={handleGoChallenges}></Button>
                {isAdmin ? <Button style={styles.button} title='Admin' onPress={handleGoAdmin}></Button> :null }
                <ReturnPreviousScreen navigation={navigation}/>

            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    image : {
        alignSelf : 'flex-start',
        width : 30,
        height : 30
    },

    container : {
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center', 
        alignSelf : 'center', 
        width : "100%",
        height : "92%",
        justifyContent : 'center',
        backgroundColor : "#e0f5ae",
        gap : 50,
    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : 'bold',
        fontSize : 40,
    }

})