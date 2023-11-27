import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View , Image, Text, TouchableOpacity} from "react-native";
import { GlobalStateContext } from "../global";



const EcoleSource1 = '../assets/Ecole/ecole1.png'
const EcoleSource3 = '../assets/Ecole/ecole2.png'
const EcoleSource2 = '../assets/Ecole/ecole3.png'

export default function EcoleButton({navigation, nom, ville, num}) {


    const {currentEcole, setCurrentEcole} = useContext(GlobalStateContext)


    const [source, setSource] = useState(require(EcoleSource1))
    const [isLoad, setIsLoad] = useState(false)

    const load = () => {
        setIsLoad(false)
        switch(num[1]%3){
            case 0 : {
                setSource(require(EcoleSource1))
                break
                
            }
            case 1 : {
                setSource(require(EcoleSource2))
                break
                
            }
            case 2 : {
                setSource(require(EcoleSource3))
                break
                
            }
            default : {
                setSource(require(EcoleSource1))
                break
            }
        }
        setIsLoad(true)
    }

    const handleGoEcole = () => {

        setCurrentEcole(num[0])
        navigation.navigate("Ecole")

    }

    return (

        <TouchableOpacity style={styles.container} onPress={handleGoEcole} onLayout={load}>
            <Image style={styles.image} source={source}/>
            <View style={{display : 'flex', flexDirection :'column', height : '100%', marginTop : "8%"}}>
                <Text style={styles.text1}>{nom}</Text>
                <Text style={styles.text2}>{ville}</Text>

            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

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

    image : {
        width : "20%", 
        resizeMode : 'center'

    }

})