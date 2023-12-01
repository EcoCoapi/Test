import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, FlatList } from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Groupe from "../../component/Groupe";
import { GlobalStateContext } from "../../global";
import SeanceEco from "../../component/SeanceEco";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import Classe from "../../component/Classe";
import ClasseChallengeEco from "../../component/ClasseChallengeEco";
import ImageButton from "../../component/ImageButon";

export default function GroupeChallengeEcoScreen({navigation}) {


    const {currentGroupeChallengeEco, isAdmin, url, currentUser} = useContext(GlobalStateContext)


    const [listeSeanceEco, setListeSeanceEco] = useState([1,2,3,4,5,6,7,7,1,2,3,4,5,6,7,7])
    const [listClasse, setListeClasse] = useState( [])

    const[isLoad, setIsLoad] = useState(false)

    const handleGoAddSeanceEco = () => {
        navigation.navigate("Add-Seance-Eco")
    }

    const handleGoEditGroupe = () => {
        navigation.navigate("Edit-Groupe-Eco")
    }

    const loadData = async () => {

        //Fonction pour charger les groupes
        setIsLoad(false)
        const newList = []
        const l = currentGroupeChallengeEco.listeClasse.slice(0, -1).split("|") 
        console.log(l)

        const request = await Promise.all(l?.map((id) => {
            return axios.get(`${url}/classe/${id}`)

        }))
        request.map(item => newList.push(item.data[0]))
        console.log(newList)
        setListeClasse(newList)

        setIsLoad(true)
    }

    

    return (

        <LinearGradient
            colors={['#8C52FF', '#00BF63']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.8]}

        >
            <View style={styles.navbar} onLayout={!isLoad ? loadData : null}>
                <ReturnPreviousScreen enable titre={'Eco Groupe'} differentWay={() => navigation.navigate("Classe")}/>
            </View>

            <View style={{display : "flex", flexDirection : 'column', width : "95%", alignItems : 'center', flexGrow : 1}}>
                <Text style={{flex : 1 , borderWidth : 2, borderStyle : "solid", borderRadius : 10, textAlignVertical : 'center', textAlign : 'center', marginHorizontal : "3%",  padding :"3%", fontWeight : "400", fontSize : 24, color : '#FDFDFD', backgroundColor : currentGroupeChallengeEco.isPublic === 0 ? "#FAC172" : "#00BF63"}}>{currentGroupeChallengeEco.nom}</Text>
                
                
                <View style={{flex : 9, width : "100%", display : 'flex', flexDirection : 'column', gap : 15, padding : "2%", justifyContent : 'space-around'}}>
                    <View style={{flexShrink : 0.3, flexBasis : "auto", overflow : 'hidden', flexGrow : 0,}}>
                        <Text style={{textAlign : 'center', fontWeight : "300", fontSize : 15}} >Classement des classes du groupe</Text>
                        <FlatList
                            style={{ gap : 2}}
                            data={isLoad ? listClasse : null}
                            renderItem={(item) => {
                                //Il faut rajouter la fonction de calcul du classement
                                return  <ClasseChallengeEco item={item.item} position={(item.index)}/>
                        
                            }}
                        
                        />
                    </View>
                    <View style={{flexShrink : 0.3, flexBasis : "auto", flexGrow : 0.6}}>
                        <Text style={{ textAlign : 'center', fontWeight : "300", fontSize : 15}} >Séance de ma classe</Text>
                        <FlatList
                            style={{   backgroundColor : '#fff'}}
                            data={isLoad ? listeSeanceEco : null}
                            renderItem={(item) => {
                                return  <Text>Heyy</Text>
                        
                            }}
                        
                        />
                    </View>
                    {isAdmin ?<View style={{flexBasis : 'auto', display : "flex", flexDirection : 'row', justifyContent : 'center'}}>
                            <ImageButton source={require('../../assets/plus.png')} bgColor={"#94265B"} action={handleGoAddSeanceEco}/>
                    </View> : null}
                </View>


 
            </View>

        </LinearGradient>



        /*
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Groupe Challenge ECO-ECO"}/>
            <View style={styles.container}>
            {isAdmin ?<Button title="Modifier le groupe" onPress={handleGoEditGroupe}/> : null}
                <Text style={styles.text}>{currentGroupeChallengeEco.nom}</Text>
                <Text>Informations sur le groupe</Text>

                <ScrollView style={{
                    width : "100%",
                    backgroundColor : "#fff"
                }}>
                    {isLoad ? listeSeanceEco.map(groupe => groupe) : null}
                </ScrollView>
                {isAdmin ? <Button title="Ajouter un séance pour son école" onPress={handleGoAddSeanceEco}/> : null}
                <ReturnPreviousScreen navigation={navigation}/>

            </View>

        </View>

        */
    )

} 


const styles = StyleSheet.create({
    containerClasse : {
        flex : 1, 
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
        display : 'flex', flexDirection : 'column',
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
        padding : "2%",
        width : "100%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center',
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