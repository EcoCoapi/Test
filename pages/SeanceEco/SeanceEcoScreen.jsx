import React, { useCallback, useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CompteurEco from "../../component/CompteurEco";
import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { GlobalStateContext } from "../../global";

export default function SeanceEcoScreen ({navigation}) {
    
    const {currentSeanceEco, isAdmin} = useContext(GlobalStateContext)

    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleGoEditSeanceEco = () => {
        navigation.navigate("Edit-Seance-Eco")
    }



    


    return (
        <View>
            <NavBar navigation={navigation} screenName={"Seance Eco Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>{currentSeanceEco}</Text>
                
                <View>
                    <View style={{
                        display : 'flex', 
                        flexDirection : 'row', 
                        alignItems : 'center', 
                        gap : "10"
                    }}>
                        <CompteurEco image={"velo"} name={"Vélo"} view={true}/>
                        <CompteurEco image={"bus"} name={"Bus"} view={true}/>
                        <CompteurEco image={"pied"} name={"Piéton"} view={true}/>


                    </View>
                    <View style={{
                        display : 'flex', 
                        flexDirection : 'row', 
                        alignItems : 'center', 
                        gap : "10"
                    }}>
                        <CompteurEco image={"trot"} name={"Trotinette"} view={true}/>
                        <CompteurEco image={"voiture"} name={"Voiture"} view={true}/>
                        <CompteurEco image={"covoit"} name={"Covoiturage"} view={true}/>

                    </View>


                </View>
                
                <Text>2023/10/25</Text>
                {isAdmin ? <Button title="Modifier la séance" onPress={handleGoEditSeanceEco}/> : null}
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
    text :{
        fontWeight : 'bold',
        fontSize : 20,
    }
})