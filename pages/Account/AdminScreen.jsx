import React, { useContext, useState } from 'react'
import { View , StyleSheet, TextInput, Button, Text, Image, ScrollView, FlatList, SafeAreaView, SectionList, TouchableOpacity} from 'react-native'
import NavBar from '../../component/NavBar'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { GlobalStateContext } from '../../global'
import Classe from '../../component/Classe'
import CustomButton from '../../component/CustomButton'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'


const ProfileSource = "../../assets/Admin/profil.png"
const ClasseSource = "../../assets/Admin/classe.png"
const CoeurSource = "../../assets/Admin/amour.png"
const MessageSource = "../../assets/Admin/discuter.png"

export default function AdminScreen({navigation}) {

    const {currentUser, currentClasse, currentEcole, currentGroupeChallengeEco, url, isAdmin} = useContext(GlobalStateContext)

    const [ecole, setEcole] = useState(null)
    const [isLoad, setIsLoad] = useState(null)

    const [listeClasse, setListeClasse] = useState([])

    const [profilePicture, setProfilePicture] = useState(null)



    const handleEditAdmin = () => {
        navigation.navigate('Home')
    }

    const renderClasse = ({item}) => {

        return(
            <Classe
                name={item.nom}
                nb={item.nb}
            />
        )

    }
    
    const handleGoEditAdmin = () => {

        navigation.navigate("Edit-Admin")
    }


    //fonction pour charger les info du comptes (classes)
    const loadData = async () => {
        setIsLoad(false)
        const response = await fetch(`${url}/ecole/${currentUser.id_ecole}`)
        const data = await response.json()

        await axios.post(`${url}/classe/prof`, {mail : currentUser.mail})
        .then(response => {
            setListeClasse(response.data)

        })
        .catch(error => {
            console.log(error)
        })

        setEcole(data[0].nom)
        setIsLoad(true)

    }

    const addProfilePicture = async () => {
        console.log("hey")
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
          })
        if (!_image.cancelled) {
            console.log("oui")
            setProfilePicture(_image.assets[0].uri)

        }
  

    }

    const showGlobal = () => {

        console.log(currentClasse.mailProf == currentUser.mail)
        console.log(currentUser)
        console.log(currentEcole)
        console.log(currentClasse)
        console.log(currentGroupeChallengeEco)


    }


    return (

        <LinearGradient
            colors={['#FFC259', '#FF914D']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
            onLayout={loadData}
        >

            <View style={styles.navbar}>
                <ReturnPreviousScreen enable titre={'Espace compte'} disable/>
            </View>

                <View style={styles.container}>
                    <TouchableOpacity  onPress={addProfilePicture}>
                        <Image style={styles.profile}  source={profilePicture ? {uri : profilePicture} : require(ProfileSource)}/>
                    </TouchableOpacity>
                    
                    <Text style={styles.text}>{`${currentUser.nom} ${currentUser.prenom}`}</Text>
                    {isLoad ? <Text style={styles.text}>{`${ecole}`}</Text> : null}
                    {listeClasse.length !== 0 ? 
                    <FlatList
                            style={{padding : "2%" }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={isLoad ? listeClasse : null}
                            renderItem={({item}) =>
                                <Classe item={item} navigation={navigation}/>
                                }
                        />: 
                        <Text style={{textAlign : 'center', fontSize : 15, fontWeight : 'bold', padding : "10%", color : '#e00'}}>Vous n'avez pas encore de classe</Text>}
                    
                    <View style={{display : 'flex', flexDirection : 'row'}}>
                        <View style={styles.containerClasse}>
                            <Image style={styles.image} source={require(CoeurSource)}/>
                            <Text style={styles.text2}>{"Session en cours"}</Text>
                        </View>
                        <View style={styles.containerClasse}>
                            <Image style={styles.image} source={require(MessageSource)}/>
                            <Text style={styles.text2}>{"Message"}</Text>
                            <Button title='Info globales' onPress={showGlobal}/>
                        </View>
                    </View>
                    <CustomButton color={"#94265B"} text={"Mettre à jour"} textColor={"#fff"} width={"80%"} height={"7%"} action={handleGoEditAdmin}/>
                    
                </View>

        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    containerClasse : {
        flex : 1, 
        backgroundColor : "#737373", 
        marginHorizontal: 30,
        padding : 10, 
        alignItems : 'center',
        opacity : 0.7,
        borderWidth : 2, 
        borderStyle : "solid", 
        borderRadius : 5, 
        marginBottom : "3%"
    },
    text2 : {
        color : "#fff",
        fontWeight : '400',
        fontSize : 21, 
        textAlign : 'center'
    }, 
    image : {
        
        width : 70,
        height : 70
    },


    profile : {
        width : 140, 
        height : 140,
        borderRadius : 170/2,
        borderColor : '#3D1E7B',
        borderWidth : 8, 

    },
    
    gradient : {
        paddingTop : '3%',
        alignItems : 'center',
        width : "100%", 
        height : "100%"
    }, 
    navbar : {
        top : 0,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 
    container : {
        padding : "2%",
        width : "100%",
        display : 'flex', 
        flexDirection : 'column',
        alignItems : 'center',
        gap : 8
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
        color : "#fff", 
        opacity : 0.8
    }
})