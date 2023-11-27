import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, TouchableOpacity } from "react-native";

const DocSource = '../assets/HomeScreen/Document.png'
const EcoleSource = '../assets/HomeScreen/Ecole.png'
const ChallengeSource = '../assets/HomeScreen/Challenge.png'
const AdminSource = '../assets/HomeScreen/Admin.png'

export default function HomeScreenButton({type, cote, action}) {

    const [text, setText] = useState(null)
    const [color, setColor] = useState(null)
    const [source, setSource] = useState(null)



    const load = () => {
        switch(type) {
            case 'Documents' : {
                setText(type)
                setColor("#00BF63")
                setSource(require(DocSource))
                break
            }
            case 'Ecoles' : {
                setText(type)
                setColor("#38B6FF")
                setSource(require(EcoleSource))
                break
            }
            case 'Challenges' : {
                setText(type)
                setColor("#FF3131")
                setSource(require(ChallengeSource))
                break
            }
            case 'Admin' : {
                setText(type)
                setColor("#FDD54F")
                setSource(require(AdminSource))
                break
            }
            default : {
                break
            }
            
        }
        

    }
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor : `${color}`, marginLeft : cote === 0 ? 0 : 50, marginRight : cote === 0 ? 50 : 0}]} onPress={action} onLayout={load}>
                {cote === 0 ? <Image  style={[styles.image, {flex : 1}]} source={source}/> : <Text style={[styles.text, {flex : 2}]}>{text}</Text>}
                {cote === 0 ? <Text style={[styles.text, {flex : 2}]}>{text}</Text> : <Image  style={[styles.image, {flex : 1}]} source={source}/>}
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    container : {
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center', 
        width : '75%',
        padding : "4%",
        height : '18%',
        gap : 0, 
        borderRadius : 20

    }, 

    text : {
        borderStyle : 'solid',
        textAlign : 'center',
        fontWeight : 'bold', 
        fontSize : 20
    },

    image : {
        width : "100%", 
        height: "100%",

    }

})
