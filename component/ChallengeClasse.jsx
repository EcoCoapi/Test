import React from "react";
import { TouchableOpacity, Image, Text , StyleSheet} from "react-native";

const ChallengeSource = '../assets/Challenge/challenge.png'

export default function ChallengeClasse({navigation, challenge}) {



    return (
        <TouchableOpacity style={styles.container} onPress={null} >
            <Image style={styles.image} source={require(ChallengeSource)}/>
            <Text style={{color : "#fff",fontWeight : '400', fontSize : 21}}>{challenge.nom}</Text>
            <Text style={{paddingVertical : "3%" ,borderWidth : 1, borderStyle : 'solid', color : "#f1f1f1",fontWeight : '400', fontSize : 13, width : "70%", textAlign : 'center'}}>{challenge.description}</Text>
        </TouchableOpacity>


    )

}

const styles = StyleSheet.create({

    container : {
        backgroundColor : "#00BF63", 
        margin : 10,
        padding : 10, 
        alignItems : 'center',
        opacity : 0.8,
        borderWidth : 2, 
        borderStyle : "solid", 
        borderRadius : 5, 
    },
    text : {
        fontWeight : 'bold',
        fontSize : 18
    }, 
    image : {
        
        width : 70,
        height : 70
    }
})