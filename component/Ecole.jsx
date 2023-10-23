import React, { useContext, useState } from "react";
import { View, StyleSheet, Pressable, Image , Text} from "react-native";
import { GlobalStateContext } from "../global";

export default function Ecole({navigation, name}){

    const {currentEcole, setCurrentEcole} = useContext(GlobalStateContext)

    const [id, setId] = useState(null);
    const [nom, setNom] = useState(name);
    const [ville, setVille] = useState(null);
    const [dept, setDept] = useState(null);
    const [region, setRegion] = useState(null);
    const [type, setType] = useState(null);
    const [nbClasse, setNbClasse] = useState(null);
    const [nbBus, setNbBus] = useState(null);
    const [nbPiste, setNbPiste] = useState(null);
    const [nbStation, setNbStation] = useState(null);


    const handleGoEcole = () => {
        setCurrentEcole(nom)
        navigation.navigate("Ecole")
    }

    return (
        <View style={styles.container}>
            <Text styles={styles.text}>{nom}</Text>
            <Pressable onPress={handleGoEcole}>
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
