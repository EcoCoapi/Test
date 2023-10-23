import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Pressable, Image} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Ecole from "../../component/Ecole";
import Challenge from "../../component/Challenge";

const UpSource = '../../assets/upArrow.png'
const DownSource = '../../assets/downArrow.png'

export default function ChallengesScreen({navigation}) {


    const [isEnabled, setIsEnabled] = useState(false)
    const [isFiltreHide, setFiltreHide] = useState(true)
    const [source, setSource] = useState(require(DownSource))
    const [listeEcoles, setListeEcoles] = useState([])
    const [isLoad, setIsLoad] = useState(false);

    const handleSwitch = () => {
        setIsEnabled(!isEnabled)
    }

    const handleHideShowFiltre = () => {
        isFiltreHide ? setSource(require(UpSource)) : setSource(require(DownSource))
        setFiltreHide(!isFiltreHide)
    }

    const loadData = () => {
        setIsLoad(false)

        const newList = listeEcoles
        newList.push(<Challenge key={1} navigation={navigation} name={"Challenge 1"} viewChall={true}/>)
        newList.push(<Challenge key={2} navigation={navigation} name={"Challenge 2"} viewChall={true}/>)
        newList.push(<Challenge key={3} navigation={navigation} name={"Challenge 3"} viewChall={true}/>)
        setListeEcoles(newList)
        setIsLoad(true)
    }

    return (

        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={'Challenges Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{isEnabled ? 'Calendrier' : 'Liste'} des challenges</Text>
                <View style={styles.toggle}>
                    <Text>Liste</Text>
                    <Switch value={isEnabled} onChange={handleSwitch}/>
                    <Text>Calendrier</Text>
                </View>
                {
                    isEnabled?
                    null :
                    <View style={styles.filtre}>
                        <View style={{ alignItems : 'center' , display :  'flex' , flexDirection : 'row' ,justifyContent : 'space-between'}}>
                            <Text style={{flex : 1}}>Filtres</Text>
                            <Pressable onPress={handleHideShowFiltre}>
                                <Image style={styles.image} source={source}/>
                            </Pressable>
                        </View>
                        {
                            isFiltreHide ? 
                            null :
                            <Text>Les filtres sont affichés</Text>
                        }
                    </View>
                }
                {
                    !isEnabled? 
                    <View>
                        {isLoad ? listeEcoles.map(ecole => ecole) : null}
                    </View> : null
                }

                <ReturnPreviousScreen navigation={navigation}/>
            </View>
            
        </View>

    )


}

const styles = StyleSheet.create({

    container : {
        paddingTop : 0,
        height : "92%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center', 
        justifyContent : 'center',
        alignSelf : 'center', 
        width : "100%",
        backgroundColor : "#e0f5ae",
        gap : 50,
        padding : 10
    }, 
    filtre : {
        alignItems : 'center',
        width : "100%",
        backgroundColor : "#a5e"
    }, 
    toggle : {
        display : "flex", 
        flexDirection : 'row',
        alignItems : 'center', 
        backgroundColor : '#fff',
        width : "50%",
        justifyContent : 'center'
    },
    textInput : {
        borderStyle : 'solid',
        borderWidth : 1, 
        width : "100%", 
        height : 50,
        backgroundColor : "#fff", 
        textAlign : 'center'
    }, 
    text :{
        fontWeight : 'bold',
        fontSize : 20,
    }, 
    image : {
        width : 30, 
        height : 30
    }
})