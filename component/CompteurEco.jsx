import React, { useState } from "react";
import { View , Image, Text, Pressable} from "react-native";


export default function CompteurEco({image, name, view}) {

    const [compteur, setCompteur] = useState(0)
    const [lien , setLien] = useState(image)
    const [nom, setNom] = useState(name)



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
        if(compteur !== 0) {
            setCompteur(compteur-1)
        }
    }
    const handlePlus = () => {
        setCompteur(compteur+ 1)
    }

    return (
        <View onLayout={load} style={{
            display :'flex', 
            flexDirection : 'column', 
            alignItems : 'center', 
            gap : "3"
        }}>
            <Text style={{fontWeight : 'bold'}}>{nom}</Text>
            <Image 
            
                source={lien}
                style={{
                    height : 70, 
                    width  : 70
                }}
            />
            <View style={{
                display : 'flex', 
                flexDirection : 'row', 
                alignItems : 'center',
                gap : "8"
            }}>
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
            </View>

        </View>

    )

}