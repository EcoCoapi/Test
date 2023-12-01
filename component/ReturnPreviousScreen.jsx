import React, { useContext, useState } from "react";
import { Pressable, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { GlobalStateContext } from "../global";
import { useNavigation } from "@react-navigation/native";



export default function ReturnPreviousScreen ({titre, enable, disable, differentWay}) {

    const navigation = useNavigation();

    const {isAdmin, currentUser} = useContext(GlobalStateContext)

    const [nom, setNom]= useState(null)
    const [prenom, setPrenom]= useState(null)
    const [ecole, setEcole]= useState(null)

    const handleGoBack = () => {

       navigation.canGoBack() ? navigation.goBack() : null;



    }

    const handleGoAdmin = () => {
        navigation.navigate("Admin")
    }

    const load = () =>  {

        if(currentUser){
            setNom(currentUser.nom)
            setPrenom(currentUser.prenom)
        }else {
            setNom('Invité')
            setPrenom("")
        }
         
            //Fonction pour ajouter l'école


    }


    return (
        <View style={styles.navbar} onLayout={isAdmin ? load : null}>
            {enable ? <Pressable onPress={differentWay ? differentWay : handleGoBack}>
                <Image
                    style={styles.image}
                    source={require('../assets/Header/fleche-gauche-bouton-noir-carre.png')}
                
                />
            </Pressable> : null}
            <View style={{ alignItems : 'center', justifyContent: 'center', position : 'absolute', width : "100%"}}>
                    <Text style={{
                        fontSize : 27, 
                        textAlign : 'center',
                        color : "#fff"
                    }}>{titre}
                    </Text>
            </View>
            {isAdmin && !disable ? 
            <TouchableOpacity onPress={handleGoAdmin}  style={{borderColor : "#595B70",  borderRadius : 6, backgroundColor : "#F9EFE8",alignItems : 'right', position : 'absolute', right : 0,  borderWidth : 2, borderStyle : 'solid'}}>
                <Text style={{textAlign : 'right', fontWeight : "500",  textAlignVertical : 'center', fontSize : 10, margin : 3}}>
                    {`${nom} ${prenom}`}
                </Text>
            </TouchableOpacity> : null}



        </View>
    )

}

const styles = StyleSheet.create({

    container : {

        display : 'flex',


    },
    navbar : {
        flexGrow : 1,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 

    image : {
        width : 40,
        height : 40
    },





})