import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../global";
import { View, Image, Text } from "react-native";

const StationSource = '../assets/Classe/station.png'
const PisteSource = '../assets/Classe/piste.png'
const BusSource3 = '../assets/Classe/bus.png'


export default function ClasseInfo({nb, type, navigation}) {

    const {currentClasse, setCurrentClasse} = useContext(GlobalStateContext)

    const [source, setSource] = useState(require(StationSource))
    const [isLoad, setIsLoad] = useState(false)

    const load = () => {
        setIsLoad(false)
        switch(type){
            case "station" : {
                setSource(require(StationSource))
                break
                
            }
            case "piste" : {
                console.log("heyyde")
                setSource(require(PisteSource))
                break
                
            }
            case "bus" : {
                setSource(require(BusSource3))
                break
                
            }
            default : {
                break
            }
        }
        setIsLoad(true)
    }

    const handleGoClasse = () => {
        setCurrentClasse(num[0])
        navigation.navigate("Classe")
    }



    return (
        <View onLayout={load} style={{borderRadius : 23, padding : "3%", backgroundColor : "#F9EFE8",borderStyle : 'solid', borderWidth : 2, display :  'flex', flexDirection : 'column', alignItems : 'center', gap : 10, justifyContent : 'center'}}>
            <Image style={{width : 50, height : 50}} source={source}/>
            <Text style={{color : "#fff", fontSize : 18, fontWeight : 'bold', backgroundColor : "#38B6FF", paddingHorizontal : 13,paddingVertical : 5, borderRadius : 100, flexGrow : 1,}}>{nb}</Text>
        </View>
    )

}
