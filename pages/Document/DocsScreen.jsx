import React, { useContext, useState } from "react";
import { View , StyleSheet, Text} from "react-native";
import NavBar from "../../component/NavBar";
import Document from "../../component/Document";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { GlobalStateContext } from "../../global";
import axios from "axios";

export default function DocsScreen ({navigation}) {

    const {url} = useContext(GlobalStateContext)

    const [listeDocs, setListDocs] = useState([])
    const [isLoad , setIsLoad] = useState(false)


    const loadData = async () => {
        // Fonction ou charger les données
        setIsLoad(false)

        const reponse = await fetch(`${url}/documents/`)

        const data = await reponse.json()

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
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={"Documents Screen"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Liste des documents</Text>
                {isLoad ? listeDocs.map(doc => doc) : null}
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({

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
        gap : 50,
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