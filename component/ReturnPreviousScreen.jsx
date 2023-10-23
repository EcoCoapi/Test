import React, { useContext } from "react";
import { Pressable, View, StyleSheet, Image } from "react-native";
import { GlobalStateContext } from "../global";
import { useNavigation } from "@react-navigation/native";



export default function ReturnPreviousScreen () {

    const navigation = useNavigation();

    const {previousScreen, setPreviousScreen} = useContext(GlobalStateContext)

    const handleGoBack = () => {

       navigation.canGoBack() ? navigation.goBack() : null;



    }


    return (
        <View>
            <Pressable onPress={handleGoBack}>
                <Image
                    style={styles.image}
                    source={require('../assets/leftArrow.png')}
                
                />


            </Pressable>



        </View>
    )

}

const styles = StyleSheet.create({

    constainer : {
        display : 'flex',


    },

    image : {
        width : 30,
        height : 30
    },





})