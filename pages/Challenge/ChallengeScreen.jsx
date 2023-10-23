import React, { useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CompteurEco from "../../component/CompteurEco";
import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { GlobalStateContext } from "../../global";

export default function ChallengeScreen ({navigation}) {

    const {currentChallenge, isAdmin} = useContext(GlobalStateContext)
    
    const [date, setDate] = useState(null)
    const [dateVisible, setDateVisible] = useState(false)

    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleGoIncriptionChallenge = () => {

        navigation.navigate("Inscription-Challenge")
    }

    const handleSelectDate = (d) => {
        setDate(d)
        setDateVisible(!dateVisible)
    }

    


    return (
        <View>
            <NavBar navigation={navigation} screenName={"Challenge Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>{currentChallenge}</Text>
                <Text>Description du challenge</Text>
               

                {isAdmin ? <Button title="Inscrire une de mes classes" onPress={handleGoIncriptionChallenge}/> : null}
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    toggle : {
        display : "flex", 
        flexDirection : 'row',
        alignItems : 'center', 
        backgroundColor : '#fff',
        width : "100%",
        justifyContent : 'center'
    },

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
        gap : 10,
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
    textInput2 : {
        borderStyle : 'solid',
        borderWidth : 1, 
        width : "100%", 
        height : 100,
        backgroundColor : "#fff", 
        textAlign : 'center'
    }, 
    text :{
        fontWeight : 'bold',
        fontSize : 20,
    }
})