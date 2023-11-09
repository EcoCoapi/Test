import React, { useContext } from "react";
import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import { GlobalStateContext } from "../global";
import { useNavigation } from "@react-navigation/native";



export default function ReturnPreviousScreen ({titre}) {

    const navigation = useNavigation();

    const {previousScreen, setPreviousScreen} = useContext(GlobalStateContext)

    const handleGoBack = () => {

       navigation.canGoBack() ? navigation.goBack() : null;



    }


    return (
        <View style={styles.navbar}>
            <Pressable onPress={handleGoBack}>
                <Image
                    style={styles.image}
                    source={require('../assets/Header/fleche-gauche-bouton-noir-carre.png')}
                
                />
            </Pressable>
            <View style={{ alignItems : 'center', justifyContent: 'center', position : 'absolute', width : "100%"}}>
                    <Text style={{
                        fontSize : 27, 
                        textAlign : 'center',
                    }}>{titre}
                    </Text>
                </View>



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