import React, { useContext } from "react";
import { StyleSheet, View, Image, Pressable , Text} from "react-native";
import { GlobalStateContext } from './../global';


export default function Document ({navigation, name, url}) {

    const {currentDoc, setCurrentDoc} = useContext(GlobalStateContext)

    const handleGoDoc = () => {
        setCurrentDoc({name})
        navigation.navigate('Doc')
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{name}</Text>
            <Pressable onPress={handleGoDoc}>
                <Image style={styles.image} source={require('../assets/rightArrow.png')}/>
            </Pressable>
        </View>


    )

}

const styles = StyleSheet.create({

    container : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingTop : 30,
        paddingLeft : 10,
    
    },
    text : {
        fontWeight : 'bold',
        fontSize : 18
    }, 
    image : {
        
        width : 30,
        height : 30
    }


})