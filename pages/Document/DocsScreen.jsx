import React, { useContext, useState } from "react";
import { View , StyleSheet, Text, ScrollView} from "react-native";
import NavBar from "../../component/NavBar";
import Document from "../../component/Document";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

export default function DocsScreen ({navigation}) {

    const {url} = useContext(GlobalStateContext)

    const [listeDocs, setListDocs] = useState([])
    const [isLoad , setIsLoad] = useState(false)


    const loadData = async () => {
        // Fonction ou charger les données
        setIsLoad(false)

        const reponse = await fetch(`${url}/documents/`)

        const data = await reponse.json()

        console.log(data)

        const newList = listeDocs

        data.map(doc => {
            
            newList.push(
                <Document 
                    key={doc.IdDocument} 
                    navigation={navigation} 
                    desc={doc.description}
                    name={doc.nom}
                    url={doc.lien}
                />
            )
        })

        setListDocs(newList)

        setIsLoad(true)
    }

    return (
        <LinearGradient 
            colors={['#CDFFD8', '#94B9FF']} 
            style={styles.gradient} 
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
            onLayout={isLoad ? null : loadData}
        >   
            <View style={styles.navbar}>
                <ReturnPreviousScreen titre='Documents' navigation={navigation} enable/>
            </View>

            <ScrollView style={{width : "100%"}}>
                <View style={styles.container}>
                    {isLoad ? listeDocs.map(doc => doc): null}
                </View>
                

            </ScrollView>
            
        </LinearGradient>

    )


}


const styles = StyleSheet.create({

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
        display : 'flex', 
        flexDirection : 'column',
        width : "100%",
        gap : 10, 
        alignItems : 'center',
    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : 'bold',
        fontSize : 40,
    }

})
/*
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Documents Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Liste des documents</Text>
                {isLoad ? listeDocs.map(doc => doc) : null}
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
*/