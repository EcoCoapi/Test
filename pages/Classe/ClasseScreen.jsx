import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";
import Classe from "../../component/Classe";
import Challenge from "../../component/Challenge";
import { ScrollView } from "react-native";

export default function ClasseScreen({navigation}) {

    const {currentClasse, isAdmin} = useContext(GlobalStateContext)

    const[isLoad, setIsLoad] = useState(false)
    const[listeChall, setListChall] = useState([])
    const[challEco, setChallEco] = useState()

    const handleGoEdit = () => {
        navigation.navigate("Edit-Classe")
    }
    const loadData = () => {
        setIsLoad(false)

        const newList = listeChall
        for (let index = 1; index < 10; index++) {
            newList.push(<Challenge key={index} navigation={navigation} name={`Challenge ${index}`} viewChall={false}/>)
            
        }
        setListChall(newList)
        setIsLoad(true)
    }

    const hanldeGoAddChallenge = () => {
        navigation.navigate("Add-Challenge")
    }

    const handleGoChallengeEco = () => {
        navigation.navigate("Challenge-ECO")

    }

    return (
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Classe Screen"}/>
            <View style={styles.container}>
                {isAdmin ? <Button title="Modifier les informations de la classe" onPress={handleGoEdit}/> : null}
                <Text style={styles.text}>{currentClasse}</Text>
                <View style={styles.container2}>
                    <Text styles={styles.text2}>Challenge ECO-ECO</Text>
                    <Pressable onPress={handleGoChallengeEco}>
                        <Image style={styles.image} source={require('../../assets/rightArrow.png')}/>
                    </Pressable>
                </View>
                <ScrollView style={{backgroundColor : "#fff", width : "100%"}}>
                    {isLoad ? listeChall.map(chall => chall) : null}
                </ScrollView>
                {isAdmin ? <Button title={"Ajouter une challenge"} onPress={hanldeGoAddChallenge}/>: null}
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
    container2 : {
        display : 'flex',
        flexDirection : 'row', 
        alignItems : 'center',
        backgroundColor : "#7649E8"

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
        fontWeight : 'bold',
        fontSize : 30,
    }, 
    image : {
        
        width : 30,
        height : 30
    }
})