import React, { useContext } from "react";
import { StyleSheet, View, Image, Pressable , Text} from "react-native";
import { GlobalStateContext } from './../global';
import { LinearGradient } from "expo-linear-gradient";


export default function Document ({navigation, name, desc,  url}) {

    const {currentDoc, setCurrentDoc} = useContext(GlobalStateContext)

    const handleGoDoc = () => {
        setCurrentDoc({
            nom : name, 
            description : desc,
            url : url
        })
        navigation.navigate('Doc')
    }

    return (
        <LinearGradient
        colors={['#00BF63', '#ffffff']} 
        style={styles.gradient} 
        start={{x : 0, y:0.5}}
        end={{x:1, y:0.5}}
        locations={[0.85, 0.95]}
        
        
        
        
        >

            <View style={styles.container}>
                <Text numberOfLines={1} style={styles.text}>{name}</Text>
                <Pressable onPress={handleGoDoc}>
                    <Image style={styles.image} source={require('../assets/rightArrow.png')}/>
                </Pressable>
            </View>

        </LinearGradient>



    )

}

const styles = StyleSheet.create({

      
    gradient : {
        display : 'flex',
        flexDirection : 'row',
        width : "80%",
        borderRadius : 8,

    },

    container : {
        borderWidth : 3, 
        borderStyle : 'solid', 
        borderRadius : 8,
        flex : 1,
        width: "80%", 
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        padding : "2%",

    
    },

    text : {
        fontWeight : 'bold',
        height : "100%", 
        color : "#fff",
        fontSize : 20, 
        maxWidth : "90%"
    }, 

    image : {
        
        width : 30,
        height : 30
    }


})