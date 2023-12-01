import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Image, FlatList, SafeAreaView } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";
import Classe from "../../component/Classe";
import Challenge from "../../component/Challenge";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../component/CustomButton";
import axios from "axios";
import ChallengeClasse from "../../component/ChallengeClasse";
import ChallengeEcoButton from "../../component/ChallengeEcoButton";

export default function ClasseScreen({navigation}) {

    const {currentClasse, isAdmin, url} = useContext(GlobalStateContext)

    const[isLoad, setIsLoad] = useState(false)
    const[listeChall, setListChall] = useState([])
    const[challEco, setChallEco] = useState()

    const handleGoEdit = () => {
        navigation.navigate("Edit-Classe")
    }
    const loadData = async () => {
        setIsLoad(false)

        const newList = listeChall

        const l = currentClasse.idChallenge ? currentClasse.idChallenge.slice(0, -1).split("|") : []

        const request = await Promise.all(l?.map((id) => {
            return axios.get(`${url}/challenges/${id}`)


        }))

        request.map(item => newList.push(item.data[0]))
        setListChall(newList)

        setIsLoad(true)
    }

    const fetchChall = async (id) => {


        return await data

    }

    const hanldeGoAddChallenge = () => {
        navigation.navigate("Add-Challenge")
    }

    const handleGoGroupe = () => {
        navigation.navigate("Groupe-Classe")

    }

    return (
        
        <LinearGradient
            colors={['#5DE0E6', '#004AAD']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
            onLayout={loadData}


        >

            <View style={styles.navbar}>
                <ReturnPreviousScreen enable titre={'Classe'} />
            </View>
            <Classe item={currentClasse} disable/>
            <SafeAreaView style={styles.container}>
                <ChallengeEcoButton action={handleGoGroupe}/>
                <FlatList
                    data={isLoad ? listeChall : null}
                    renderItem={({item}) => <Challenge name={item.nom}/>}
                    
                />
            </SafeAreaView>


        </LinearGradient>
        

        /*
        <View>
            <NavBar navigation={navigation} screenName={'Add-Classe Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création d'une classe</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <TextInput style={styles.textInput} placeholder="Niveau" />
                <TextInput style={styles.textInput} placeholder="Nombre d'élève" />
                <Button onPress={handleCreateClasse} title="Créer la classe"/>
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
        */
    )
}
const styles = StyleSheet.create({
    containerClasse : {
        backgroundColor : "#737373", 
        marginHorizontal: 30,
        padding : 10, 
        alignItems : 'center',
        opacity : 0.7,
        borderWidth : 2, 
        borderStyle : "solid", 
        borderRadius : 5, 
        marginBottom : "3%"
    },
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
        alignItems : 'center',
        width : "100%", 
        height : "100%", 
        gap : 15,
        alignItems : 'center' 
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
        padding : "2%",
        width : "85%",
        gap : 8
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
        color : "#fff", 
        opacity : 0.8
    }
})