import React, { useState } from "react";
import { View , Image, Text, Pressable} from "react-native";


export default function CompteurEco({image, value, setValue}) {

    const [lien , setLien] = useState(null)



    const load = () =>  {

        switch (image) {
            case "velo":
                setLien(require('../assets/Eco/velo.png'))
                break;
            case "bus":
                setLien(require('../assets/Eco/autobus.png'))
                break
            case "voiture":
                setLien(require('../assets/Eco/voiture.png'))
                break
            case "pied":
                setLien(require('../assets/Eco/pieton.png'))
                break
            case "covoit":
                setLien(require('../assets/Eco/covoiturage.png'))
                break
            case "trot":
                setLien(require('../assets/Eco/trottinette.png'))
                break
            default:
                break;
        }
    }

    const handleMoins = () => {
        if(value !== 0) {
            setValue(value-1)
        }
    }
    const handlePlus = () => {
        setValue(value+ 1)
    }

    return (
        <View onLayout={load} style={{width : "100%", flexGrow : 1,  backgroundColor : "#EFE4E1", flexDirection : 'column', alignItems : 'center', gap : 3, padding : "3%", borderRadius : 10, borderWidth : 3, borderStyle : 'solid'}}>
            <View style={{ flex: 60, width : "100%", alignItems : 'center'}}>
                <Image source={lien} style={{flex : 1, resizeMode : 'center'}}/>
            </View>
            
            <View style={{ flex: 40, width : "100%", flexDirection : 'row', justifyContent : 'center', alignItems : 'center', gap : 3}}>
                <Pressable style={{flex : 30, height : "100%", justifyContent : 'center', alignItems : 'center'}} onPress={handleMoins}>
                    <Image source={require('../assets/Eco/moins.png')} style={{flex : 1, resizeMode : 'center', width : "100%",}}/>
                </Pressable>
                <Text style={{flex : 40, backgroundColor : "#000", color : "#FFF", textAlign : 'center', fontSize : 18, borderRadius : 6, borderWidth : 1, borderStyle : 'dotted'}}>{value}</Text>
                <Pressable style={{flex : 30,height : "100%", justifyContent : 'center', alignItems : 'center'}} onPress={handlePlus}>
                    <Image source={require('../assets/Eco/plus.png')} style={{flex : 1, resizeMode : 'center', width : "100%"}}/>
                </Pressable>
            </View>

        



        </View>

    )

}

/*

                {!view ? <Pressable onPress={handleMoins}>
                    <Image                 
                    style={{
                        height : 30, 
                        width  : 30
                    }}
                    source={require('../assets/Eco/moins.png')}/>
                </Pressable> : null}
                <Text style={{
                    fontWeight :'bold'
                }}>{compteur}</Text>
                {!view ? <Pressable onPress={handlePlus}>
                    <Image                 
                    style={{
                        height : 30, 
                        width  : 30
                    }}
                    source={require('../assets/Eco/plus.png')}/>
                </Pressable> : null}

                */