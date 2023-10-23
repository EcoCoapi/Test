import React , {useState}from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker, { getToday, getFormatedDate } from 'react-native-modern-datepicker'
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

export default function AddChallengeScreen({navigation}) {

    const listeDept = [
        {'value' : 33 , 'label' : 'Gironde'},
        {'value' : 17 , 'label' : 'Charente Maritime'}
    ]



    const [dateD, setDateD] = useState(null)
    const [dateDVisible, setDateDVisible] = useState(false)
    const [dateF, setDateF] = useState(null)
    const [dateFVisible, setDateFVisible] = useState(false)

    const [dept, setDept] = useState(null)

    const handleCreateChallenge = () => {
        //Fonction pour ajouter un challenge personnalisé dans la BDD
        navigation.goBack()
    }

    const handleShowDateD = () => {
        //console.log("heyy")
        setDateDVisible(!dateDVisible)
        setDateFVisible(false)

    }
    const handleShowDateF = () => {
        //console.log("heyy")
        setDateFVisible(!dateFVisible)
        setDateDVisible(false)

    }

    return (
        <View>
            <NavBar navigation={navigation} screenName={'Add-Challenge Screen'}/>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Création d'un challenge</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <TextInput style={styles.textInput} placeholder="Description" />
                {true? <TextInput onPressIn={handleShowDateD} editable={false} style={styles.textInput} placeholder={"Date de début"} value={dateD}/> : null }
                {dateDVisible ? <DatePicker style={{height : 30}}

                    onSelectedChange={date => setDateD(date)}
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
                    minimumDate={getToday()}
                
                /> : null }
                {true? <TextInput onPressIn={handleShowDateF} editable={false} style={styles.textInput} placeholder={"Date de fin"} value={dateF}/> : null }
                {dateFVisible ? <DatePicker style={{height : 30}}

                    onSelectedChange={date => setDateF(date)}
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
                    minimumDate={dateD}
                
                /> : null }
                <TextInput style={styles.textInput} placeholder="Region" />
                <Dropdown
                    data={listeDept}
                    style={{
                        height : 50, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder={`Département `}
                    value={dept}
                    onChange={item => {
                        setDept(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                />
                <TextInput style={styles.textInput} placeholder="Ville" />
                <Button onPress={handleCreateChallenge} title="Créer le challenge"/>
                <ReturnPreviousScreen navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        paddingTop : 0,
        height : "92%",
        display : 'flex', 
        flexDirection : 'column',

        alignSelf : 'center', 
        width : "100%",
        backgroundColor : "#e0f5ae",
        gap : 100,
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