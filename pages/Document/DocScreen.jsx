import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import NavBar from "../../component/NavBar";
import { GlobalStateContext } from "../../global";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { useState } from "react";

export default function DocScreen ({navigation, name}) {

    const {currentDoc} = useContext(GlobalStateContext)

    const [isError, setIsError] = useState(false)

    const handleGoToLink = async () => {
        //Naviguer vers le lien externe
        if(await Linking.canOpenURL(currentDoc.url)){
            await Linking.openURL(currentDoc.url) 
            setIsError(false)
        }else {
            setIsError(true)
        }
           

    }

    return (

        <View>
            <NavBar navigation={navigation} screenName={'Doc Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{currentDoc.nom}</Text>
                <Text style={styles.text2}>{currentDoc.description}</Text>
                <Button title="Ouvrir le lien" onPress={handleGoToLink}/>
                {isError ? <Text style={{color : "#F00"}}>Erreur dans le lien</Text> : null}
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
    },
    text2 :{
        fontSize : 15,
    }
})