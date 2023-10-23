import React, { useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CompteurEco from "../../component/CompteurEco";
import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { GlobalStateContext } from "../../global";

export default function EditSeanceEcoScreen ({navigation}) {

    const{currentSeanceEco, setCurrentSeanceEco} = useContext(GlobalStateContext)
    
    const [date, setDate] = useState(null)
    const [dateVisible, setDateVisible] = useState(false)

    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleEditSeanceEco = () => {
        //Fonction pour modifier uen séance Eco à la BDD

        navigation.goBack()
    }
    const handleDeleteSeanceEco = () => {
        //Fonction pour supprimer uen séance Eco à la BDD

        navigation.goBack()
    }

    const handleSelectDate = (d) => {
        setDate(d)
        setDateVisible(!dateVisible)
    }

    


    return (
        <View>
            <NavBar navigation={navigation} screenName={"Edit-Seance Eco Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Modifier une séance ECO</Text>
                {!dateVisible ? <TextInput editable style={styles.textInput} placeholder={"Nom"} value={currentSeanceEco}/> : null}
                <TextInput onPressIn={handleShowDate} editable={false} style={styles.textInput} placeholder={"Date"} value={date}/>
                {!dateVisible ? <TextInput style={styles.textInput} placeholder="Nombre de point de la séance"/> : null}

                {dateVisible ? <DatePicker style={{height : 30}}

                    onSelectedChange={date => handleSelectDate(date)}
                    mode="calendar"
                    options={{
                        backgroundColor: '#090C08',
                        textHeaderColor: '#FFA25B',
                        textDefaultColor: '#F6E7C1',
                        selectedTextColor: '#fff',
                        mainColor: '#F4722B',
                        textSecondaryColor: '#D6C7A1',
                        borderColor: 'rgba(122, 146, 165, 0.1)',
                      }}
                
                /> : null }
                {!dateVisible ? <View style={{gap : 10}}>
                    <View style={{
                        display : 'flex', 
                        flexDirection : 'row', 
                        alignItems : 'center', 
                        gap : "10"
                    }}>
                        <CompteurEco image={"velo"} name={"Vélo"} view={false}/>
                        <CompteurEco image={"bus"} name={"Bus"} view={false}/>
                        <CompteurEco image={"pied"} name={"Piéton"} view={false}/>


                    </View>
                    <View style={{
                        display : 'flex', 
                        flexDirection : 'row', 
                        alignItems : 'center', 
                        gap : "10"
                    }}>
                        <CompteurEco image={"trot"} name={"Trotinette"} view={false}/>
                        <CompteurEco image={"voiture"} name={"Voiture"} view={false}/>
                        <CompteurEco image={"covoit"} name={"Covoiturage"} view={false}/>

                    </View>

                </View>
                : null}

                <Button title="Modifier la séance" onPress={handleEditSeanceEco}/>
                <Button title="Supprimer la séance" onPress={handleDeleteSeanceEco}/>
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