import React, { useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CompteurEco from "../../component/CompteurEco";
import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { GlobalStateContext } from "../../global";

export default function SeanceScreen ({navigation}) {

    const {currentSeance, isAdmin} = useContext(GlobalStateContext)
    
    const [date, setDate] = useState(null)
    const [dateVisible, setDateVisible] = useState(false)

    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleGoEditSeance = () => {

        navigation.navigate("Edit-Seance")
    }


    


    return (
        <View>
            <NavBar navigation={navigation} screenName={"Add-Seance Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>{currentSeance}</Text>
                <Text>Description de la séance</Text>
               

                {isAdmin ? <Button title="Modifier la séance" onPress={handleGoEditSeance}/> : null}
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