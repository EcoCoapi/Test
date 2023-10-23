import React, { useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CompteurEco from "../../component/CompteurEco";
import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { GlobalStateContext } from "../../global";

export default function EditSeanceScreen({navigation}) {

    const {currentSeance} = useContext(GlobalStateContext)
    
    const [date, setDate] = useState(null)
    const [dateVisible, setDateVisible] = useState(false)

    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleEditSeance = () => {
        //Fonction pour modifier uen séance à la BDD

        navigation.goBack()
    }
    const handleDeleteSeance = () => {
        //Fonction pour ajoiter uen séance à la BDD

        navigation.goBack()
    }

    const handleSelectDate = (d) => {
        setDate(d)
        setDateVisible(!dateVisible)
    }

    


    return (
        <View>
            <NavBar navigation={navigation} screenName={"Edit-Seance Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Modifier une séance</Text>
                {!dateVisible ? <TextInput editable style={styles.textInput} placeholder={"Nom"} value={currentSeance}/> : null}
                <TextInput onPressIn={handleShowDate} editable={false} style={styles.textInput} placeholder={"Date"} value={date}/>
                {!dateVisible ? <TextInput multiline style={styles.textInput2} placeholder="Description de la séance"/> : null}

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
               

                <Button title="Modifier la séance" onPress={handleEditSeance}/>
                <Button title="Supprimer la séance" onPress={handleDeleteSeance}/>
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