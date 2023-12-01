import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const EcoSource = '../assets/logoEco.png'

export default function ChallengeEcoButton({navigation, action}) {


    return (

        <TouchableOpacity style={styles.container} onPress={action}>
            <Image style={styles.image} source={require(EcoSource)}/>
            <View style={styles.container_info_ecole_button}>
                <Text style={styles.nom_ecole_button}>{"Challenge ECO-ECO"}</Text>
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    container_info_ecole_button : {
        display : 'flex', 
        flexDirection :'column', 
        height : '100%', 
        marginTop : "8%"
    },

    container : {
        alignSelf : 'center',
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center', 
        width : '89%',
        padding : "6%",
        height :  120,
        gap : 13, 
        borderRadius : 20, 
        backgroundColor : "#00BF63", 
        marginVertical : "5%"

    }, 

    nom_ecole_button : {
        textAlign : 'left',
        fontWeight : 'bold',
        color : "#FDD54F",
        fontSize : 26,

    },
    text2 : {

        textAlign : 'left',
        paddingLeft : "2%",
        fontSize : 17, 
        fontWeight : '300'
    },

    image : {
        width : "30%", 
        resizeMode : 'center' 

    }

})
