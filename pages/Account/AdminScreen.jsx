import React, { useContext, useState } from 'react'
import { View , StyleSheet, TextInput, Button, Text, Image, ScrollView, FlatList, SafeAreaView, SectionList, TouchableOpacity} from 'react-native'
import NavBar from '../../component/NavBar'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { GlobalStateContext } from '../../global'
import Classe from '../../component/Classe'
import CustomButton from '../../component/CustomButton'
import * as ImagePicker from 'expo-image-picker';


const ProfileSource = "../../assets/Admin/profil.png"
const ClasseSource = "../../assets/Admin/classe.png"
const CoeurSource = "../../assets/Admin/amour.png"
const MessageSource = "../../assets/Admin/discuter.png"

export default function AdminScreen({navigation}) {

    const {currentUser, url} = useContext(GlobalStateContext)

    const [ecole, setEcole] = useState(null)
    const [isLoad, setIsLoad] = useState(null)

    const [profilePicture, setProfilePicture] = useState(null)

    const data = [
        {
            nom : "CE2 A", 
            nb : 25
        },
        {
            nom : "CE2 B", 
            nb : 38
        },
        {
            nom : "CE2 C", 
            nb : 38
        },
        {
            nom : "CE2 D", 
            nb : 38
        },
        {
            nom : "CE2 E", 
            nb : 38
        },
    ]

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
            setProfilePicture(_image.uri)
            console.log(_image.uri)
            console.log(JSON.stringify(_image))
        }
  

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
                    <TouchableOpacity onPress={addProfilePicture}>
                        <Image style={styles.profile}  source={{uri : profilePicture}}/>
                    </TouchableOpacity>
                    
                    <Text style={styles.text}>{`${currentUser.nom} ${currentUser.prenom}`}</Text>
                    {isLoad ? <Text style={styles.text}>{`${ecole}`}</Text> : null}
                    <FlatList
                        style={{padding : "2%"}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({item}) =>
                            <Classe name={item.nom} nb={item.nb}/>
                            }
                    />
                    <View style={{display : 'flex', flexDirection : 'row'}}>
                        <View style={styles.containerClasse}>
                            <Image style={styles.image} source={require(CoeurSource)}/>
                            <Text style={styles.text2}>{"Session en cours"}</Text>
                        </View>
                        <View style={styles.containerClasse}>
                            <Image style={styles.image} source={require(MessageSource)}/>
                            <Text style={styles.text2}>{"Message"}</Text>
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