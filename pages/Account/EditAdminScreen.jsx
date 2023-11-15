import React, { useContext, useState } from 'react'
import { View , StyleSheet, TextInput, Button, Text, ActivityIndicator} from 'react-native'
import NavBar from '../../component/NavBar'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../../component/Input'
import DropDown from '../../component/DropDown'
import CustomButton from '../../component/CustomButton'
import { GlobalStateContext } from '../../global'
import axios from 'axios'


export default function EditAdminScreen({navigation}) {

    const data = [
        { label : 'Ecole 1', value : '1'},
        { label : 'Ecole 2', value : '2'}
    ]

    const {currentUser, url, setCurrentUser} = useContext(GlobalStateContext)

    const [showErreurMail, setShowErreurMail] = useState(false)
    const [showErreurNom, setShowErreurNom] = useState(false)
    const [showErreurPrenom, setShowErreurPrenom] = useState(false)
    const [showErreurEcole, setShowErreurEcole] = useState(false)
    const [showErreurMdp, setShowErreurMdp] = useState(false)
    const [showErreurCode, setShowErreurCode] = useState(false)
    const [showErreurVerif, setShowErreurVerif] = useState(false)
    const [showErreurCompte, setShowErreurCompte] = useState(false)

    const[name, setName] = useState(currentUser.nom)
    const[prename, setPrename] = useState(currentUser.prenom)
    const[email, setMail] = useState(currentUser.mail)
    const[motdePasse, setMdp] = useState(null)
    const[ecole, setEcole] = useState(null)

    const [wantDelete, setWantDelete] = useState(false)

     const[isWaiting, setIsWaiting] = useState(false)
    const[isLoad, setIsLoad] = useState(false)



    const handleDeleteAdmin = () => {
        console.log("hey")
        setWantDelete(true)
    }

    const handleEditAdmin = async () => {

        setIsWaiting(true)

        const body = {
            mail : email, 
            nom : name, 
            prenom : prename,
            mdp : currentUser.motDePasse
        }


        await axios.put(`${url}/comptes`, body)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })

        await axios.get(`${url}/comptes/${email}`)
        .then(reponse => {
            reponse.data.map(item => {
                setCurrentUser(item)

            })
        })
        .catch(error => {
            console.log(error)
        })



        setIsWaiting(false)

        navigation.navigate("Admin")

        
    }

    const handleChangeName = (value) => {
        setShowErreurNom(false)
        setName(value)
    }
    const handleChangePrenom = (value) => {
        setShowErreurPrenom(false)
        setPrename(value)
    }
    const handleChangeEcole = (value) => {
        setShowErreurEcole(false)
        setEcole(value)
    }

    const handleChangeMdp = (value) => {


        let msg = "";

        if(value.toLowerCase() == value) msg = msg + "X Majuscule\n" 
        if(value.length < 10) msg = msg + "X Longeur\n" 
        
        setMdp(value)
        setShowErreurMdp(true)
        setMessageErreurMdp(msg)

        console.log(msg)
    }


    const loadData = () => {
        setIsLoad(true)
        data.map(item => {
            if(item.value == currentUser.id_ecole) setEcole(item)
        })



    }




    return (
        <LinearGradient
            colors={['#FFC259', '#FF914D']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
        >

            <View style={styles.navbar}>
                <ReturnPreviousScreen enable titre={'Espace compte'} disable/>
            </View>

                {!isWaiting ? <View style={styles.container} onLayout={!isLoad ? loadData : null}>
                    <Text style={styles.text}>Modifier le compte</Text>
                    <Input mdp={null} text={'Nom'} placeholder={"Dupont"} value={name} setValue={handleChangeName} errorMessage={showErreurNom ? 'Champ manquant' : null}/>
                    <Input mdp={null} text={'Prénom'} placeholder={"Etienne"} value={prename} setValue={handleChangePrenom} errorMessage={showErreurPrenom ? 'Champ manquant' : null}/>
                    <DropDown type={"Ecole"} data={data} value={ecole} setValue={handleChangeEcole} labelField={'label'} valueField={'value'} placeholder={'Ecole primaire imaginaire'} errorMessage={showErreurEcole ? "Champ manquant" : null}/>
                    <CustomButton disable={!(name != null && prename != null && ecole != null)} color={"#94265B"} text={"Confirmer les modifications"} textColor={"#fff"} width={"80%"} action={handleEditAdmin}/>
                    {!wantDelete ? <CustomButton disable={!(name != null && prename != null && ecole != null)} color={"#94265B"} text={"Supprimer le compte"} textColor={"#fff"} width={"80%"} action={() => setWantDelete(true)} /> : null}
                    {wantDelete ?
                        <View style={{alignItems : 'center', width : "100%"}}>
                            <Text style={{color : '#f00', fontSize : 13,  fontWeight : '500', marginBottom : 15}}>Etes-vous sur de vouloir supprimer votre compte ? </Text>
                            <CustomButton color={"#94265B"} text={"Confirmer la suppression"} textColor={"#fff"} width={"80%"} action={handleDeleteAdmin}/>
                        </View>
                    
                    
                    : null}
                </View> : <View style={{width : "100%", alignItems : 'center', height : "100%"}}>
                    <ActivityIndicator  size='large' color={"#94265B"}/>
                </View>
                
                }

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
        overflow : 'hidden', 

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
        gap : 30
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