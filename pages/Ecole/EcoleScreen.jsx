import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Classe from "../../component/Classe";
import ClasseInfo from "../../component/ClasseInfo";
import CustomButton from "../../component/CustomButton";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";

export default function EcoleScreen({navigation}) {

    const {currentEcole, currentUser,  isAdmin, url} = useContext(GlobalStateContext)

    const[isLoad, setIsLoad] = useState(false)
    const[listeClasse, setListeClasse] = useState([])

    const data = [
        {
            nom : "CE2 A", 
            nb : 25
        },
        {
            nom : "CE2 B", 
            nb : 38
        },
        {
            nom : "CE2 C", 
            nb : 38
        },
        {
            nom : "CE2 D", 
            nb : 38
        },
        {
            nom : "CE2 E", 
            nb : 38
        },
    ]

    const handleGoEdit = () => {
        navigation.navigate("Edit-Ecole")
    }
    const loadData = async () => {
        setIsLoad(false)

        await axios.post(`${url}/classe/ecole`, {ecole : currentEcole.idEcole})
        .then(response => {
            setListeClasse(response.data)
        })
        .catch(error => {
            console.log(error)
        })

        setIsLoad(true)
    }

    const hanldeGoAddClasseScreen = () => {
        navigation.navigate("Add-Classe")
    }

    const verifCompteEcole = () => {
        return currentEcole.idEcole == currentUser.id_ecole
    }

    return (

        <LinearGradient
        colors={['#8C52FF', '#5CE1E6']} 
        style={styles.gradient} 
        start={{x : 0, y:0.5}}
        locations={[0.1, 0.9]}
        onLayout={loadData}
        
>   
            <View style={styles.navbar}>
                <ReturnPreviousScreen titre='Ecole' navigation={navigation} enable/>
            </View>
            <LinearGradient
                    colors={['#7ED957', '#FDD54F']} 
                    style={{position :'absolute', top : 350,  width : 800, height : 800,  borderRadius : 500}}
                    >
             </LinearGradient>
            {
                verifCompteEcole() ? 
                <View style={{alignItems : 'center' , display : 'flex', flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Text style={{ textAlignVertical : 'center', alignSelf :'center', borderWidth : 2, borderRadius : 15,  width : 100, fontSize : 15, fontWeight : "300", textAlign : 'center', padding : "2%", backgroundColor : '#D9D9D9'}}>Votre école</Text>
                    <CustomButton width={"40%"} color={"#3D1E7B"} text={"Modifier l'école"} textColor={'#fff'} action={handleGoEdit}/>
                
                
                </View> : null}
            <View style={styles.container2}>
                
                <Image style={styles.image2} source={require('../../assets/Ecole/ecole1.png')}/>
                <View style={{display : 'flex', flexDirection :'column', height : '100%', marginTop : "8%"}}>
                    <Text style={styles.text1}>{currentEcole.nom}</Text>
                    <Text style={styles.text2}>{currentEcole.ville}</Text>

                </View>
            
            </View>
            <View style={{backgroundColor : 'transparent', borderRadius : 20, marginVertical : "3%", marginHorizontal : "6%", paddingVertical : "3%", borderWidth : 3, borderStyle : 'dashed', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', gap : 30}}>
                <ClasseInfo nb={currentEcole.nbStationVelo} type={"station"} navigation={navigation}/>
                <ClasseInfo nb={currentEcole.nbBus} type={"bus"} navigation={navigation}/>
                <ClasseInfo nb={currentEcole.nbPistecCyclable} type={"piste"} navigation={navigation}/>
            </View>

            <View>
                {listeClasse.length !== 0 ? <FlatList
                            style={{padding : "2%" }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={isLoad ? listeClasse : null}
                            renderItem={({item}) =>
                                <Classe item={item} name={item.niveau} nb={item.nbEleves}/>
                                }
                        />: 
                        <Text style={{textAlign : 'center', fontSize : 15, fontWeight : 'bold', padding : "10%", color : '#e00'}}>Aucune classe dans cette école</Text>}
            </View>
            {isAdmin && verifCompteEcole() ? <View style={{alignItems : 'center', width : "100%"}}>
                <CustomButton action={hanldeGoAddClasseScreen} text={"Ajouter une classe"} color={"#3D1E7B"} textColor={"#fff"} width={"70%"}/>
            </View> : null}


        </LinearGradient>
    


        /*
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Ecole Screen"}/>
            <View style={styles.container}>
                {isAdmin ? <Button title="Modifier les informations de l'école" onPress={handleGoEdit}/> : null}
                <Text style={styles.text}>{currentEcole}</Text>
                <ScrollView style={{backgroundColor : "#fff", width : "100%"}}>
                    {isLoad ? listeClasse.map(classe => classe) : null}
                </ScrollView>
                {isAdmin ? <Button title={"Ajouter une classe"} onPress={hanldeGoAddClasseScreen}/>: null}
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
        */
    )



}

const styles = StyleSheet.create({

    container2 : {
        alignSelf : 'center',
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center', 
        width : '89%',
        padding : "6%",
        height :  120,
        gap : 13, 
        borderRadius : 20, 
        backgroundColor : "#F8F8F8", 
        marginVertical : "5%"

    }, 

    text1 : {
        textAlign : 'left',
        fontWeight : 'bold',
        fontSize : 18, 
    },
    text2 : {
        textAlign : 'left',
        paddingLeft : "2%",
        fontSize : 17, 
        fontWeight : '300'
    },

    image2 : {
        width : "20%", 
        resizeMode : 'center'
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

    gradient : {
        
        paddingTop : '3%',
        display : 'flex',
        flexDirection : 'column',
        height : '100%', 
    },

    navbar : {
        alignItems : 'center',
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 

    image : {
        alignSelf : 'flex-start',
        width : 30,
        height : 30
    },

    container : {
        borderWidth : 1, 
        borderStyle : 'solid',
        display : 'flex', 
        flexDirection : 'column',
        width : "90%",
        height : "100%", 
        flex : 1, 
        gap : 10, 
        zIndex : 999, 
        alignItems : 'center',
        padding : "2%", 
        alignSelf  :'center'
    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : 'bold',
        fontSize : 40,
    }

})