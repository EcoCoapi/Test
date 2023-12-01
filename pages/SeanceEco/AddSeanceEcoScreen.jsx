import React, { useContext, useState } from "react";
import { View, StyleSheet , Text, Button} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";

import { TextInput } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../component/CustomButton";
import CompteurEco from './../../component/CompteurEco';
import Input from "../../component/Input";
import axios from "axios";
import { GlobalStateContext } from "../../global";

const currentDate = new Date().toISOString()

export default function AddSeanceEcoScreen ({navigation}) {

    const {currentClasse, currentGroupeChallengeEco, url} = useContext(GlobalStateContext)
    
    const [date, setDate] = useState(null)
    const [nbVelo, setNbVelo] = useState(0)
    const [nbPieton, setNbPieton] = useState(0)
    const [nbTrot, setNbTrot] = useState(0)
    const [nbCovoit, setNbCovoit] = useState(0)
    const [nbBus, setNbBus] = useState(0)
    const [nbVoiture, setNbVoiture] = useState(0)
    const [nbPoint, setNbPoint] = useState(null)

    const [errorMessage, setErrorMessage] = useState(null)



    const [dateVisible, setDateVisible] = useState(false)


    const handleShowDate = () => {
        setDateVisible(!dateVisible)

    }

    const handleAddSeanceEco = async () => {
        //Fonction pour ajoiter uen séance Eco à la BDD
        if(verifInfo()){
            console.log("oui")
            const body = {
                date : date,
                idGroupe : currentGroupeChallengeEco.idGroupe,
                idClasse : currentClasse.idClasse,
                nbVelo : nbVelo,
                nbTc : nbBus ,
                nbPieton : nbPieton,
                nbVoiture : nbVoiture,
                nbCoVoiture : nbCovoit,
                nbTrot : nbTrot,
                points : nbPoint
            }

            await axios.post(`${url}/seance/eco/add`, body)
            .then(result => {
                console.log(result.data)
                navigation.navigate("Groupe-Challenge-Eco")
            })
            .catch(error => {
                console.log(error)
            })

        }
        
    }

    const verifInfo = () => {

        if(nbPoint && date) {
            setErrorMessage(null)
            return true
        }
        else {
            if(!nbPoint && !date) setErrorMessage("Date et nombre de points")
            else if (!nbPoint) setErrorMessage("Nombre de points")
            else if(!date) setErrorMessage("Date")
            return false
        }


    }

    const handleSelectDate = (d) => {
        setDate(d.replace("/", "-").replace('/', '-'))
        
        

    }

    const load = () => {


    }

    


    return (

        
        <LinearGradient
            colors={['#8C52FF', '#00BF63']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.8]}

        >


            <View style={styles.navbar} >
                <ReturnPreviousScreen enable titre={'Add Séance'} />
            </View>

            <View style={styles.container} onLayout={load}>
                {!errorMessage ? null :<Text style={{fontWeight : "300", color : "#F00", fontStyle : 'italic'}}>{`Champs manquant : ${errorMessage}`}</Text>}
                <View style={{padding : "1.5%", overflow : 'hidden', flex: 73, width : "100%", justifyContent : 'center', alignItems : 'center'}}>
                    <DatePicker
                        options={{
                            backgroundColor: "#EFE4E1",
                            textHeaderColor: '#3D1E7B',
                            textDefaultColor: '#595B70',
                            selectedTextColor: '#38B6FF',
                            textFontSize : 17,
                            mainColor: '#004F7C',
                            textSecondaryColor: '#721E49',
                            borderColor: 'rgba(122, 146, 165, 0.1)',
                        }}
                        style={{
                            borderRadius : 15,
                             
                        }}
                        minimumDate={(new Date()).toISOString().split("T")[0].replace("-", "/").replace("-", "/")}
                        mode="calendar"
                        onDateChange={i => handleSelectDate(i)}
                    />

                </View>
                <View style={{gap : 5, flex: 35, width : "100%", flexDirection : 'column'}}>
                    <View style={{flex : 50, flexDirection : 'row', gap : 3}}>
                        <View style={{flex : 26, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"velo"} value={nbVelo} setValue={setNbVelo}/>
                        </View >
                        <View style={{flex : 48, justifyContent : 'center', alignItems : 'center'}}>
                            <Input text={"Nombre de points"} mdp={null} keyboard={"numeric"} placeholder={"0"} value={nbPoint} setValue={setNbPoint}/>
                        </View>
                        <View style={{flex : 26, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"bus"} value={nbBus} setValue={setNbBus}/>
                        </View>
                    </View>
                    <View style={{flex : 50, flexDirection : 'row', gap : 3}}>
                        <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"voiture"} value={nbVoiture} setValue={setNbVoiture}/>
                        </View >
                        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"covoit"} value={nbCovoit} setValue={setNbCovoit}/>
                        </View>
                        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"trot"} value={nbTrot} setValue={setNbTrot} />
                        </View>
                        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                            <CompteurEco image={"pied"} value={nbPieton} setValue={setNbPieton} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 14, width : "100%", alignItems : 'center', justifyContent : 'center'}}>
                    <CustomButton text={"Valider"} color={"#3D1E7B"} textColor={"#fff"} width={"80%"} height={"60%"} action={handleAddSeanceEco}/>
                </View>

            </View>


        </LinearGradient>

    )

}

/*

                        


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
*/ 

const styles = StyleSheet.create({

    text2 : {
        color : "#fff",
        fontWeight : '400',
        fontSize : 21, 
        textAlign : 'center'
    }, 
    image : {
        
        width : 70,
        height : 70
    },


    profile : {
        width : 140, 
        height : 140,
        borderRadius : 170/2,
        borderColor : '#3D1E7B',
        borderWidth : 8, 

    },
    
    gradient : {
        paddingTop : '3%',
        height : "100%",
        flex : 1,
        alignItems : 'center',
        gap : 1,
    }, 
    navbar : {
        top : 0,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 
    container : {
        flex : 1,
        flexGrow : 1,
        
        padding : "2%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center',
        gap : 5, 
        width : "98%",

    }, 
    textInput : {
        borderStyle : 'solid',
        borderWidth : 1, 
        width : "100%", 
        height : 50,
        backgroundColor : "#fff", 
        textAlign : 'center'
    }, 
    footer : {
        position : 'absolute', 
        alignItems : 'center',
        justifyContent : 'center', 
        gap : 45,
        bottom : 0, 
        width : "100%",
        borderTopLeftRadius : 13,
        borderTopRightRadius : 13,

        display : 'flex', 

    },
    text :{

        fontWeight : 'bold',
        fontSize : 20,
        color : "#fff", 
        opacity : 0.8
    }
})