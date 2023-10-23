import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NavBar from "../../component/NavBar";
import { GlobalStateContext } from "../../global";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

export default function DocScreen ({navigation, name}) {

    const {currentDoc} = useContext(GlobalStateContext)

    const handleGoToLink = () => {
        //Naviguer vers le lien externe
    }

    return (

        <View>
            <NavBar navigation={navigation} screenName={'Doc Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{currentDoc.name}</Text>
                <Button title="Ouvrir le lien" onPress={handleGoToLink}/>
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