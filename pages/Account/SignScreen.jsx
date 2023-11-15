import React, { useContext, useState } from 'react'
import { View , StyleSheet, TextInput, Button, Text, Pressable, ScrollView, ActivityIndicator} from 'react-native'
import NavBar from '../../component/NavBar'
import { Dropdown } from 'react-native-element-dropdown'
import ReturnPreviousScreen from '../../component/ReturnPreviousScreen'
import axios from 'axios'
import { GlobalStateContext } from '../../global'
import bycrypt from 'bcryptjs'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../../component/Input'
import CustomButton from './../../component/CustomButton';
import DropDown from '../../component/DropDown'


export default function SignScreen({navigation}) {

    const {url, saltHash} = useContext(GlobalStateContext)

    const [verifMail, setVerifMail] = useState(false)
    const [showErreurMail, setShowErreurMail] = useState(false)
    const [showErreurNom, setShowErreurNom] = useState(false)
    const [showErreurPrenom, setShowErreurPrenom] = useState(false)
    const [showErreurEcole, setShowErreurEcole] = useState(false)
    const [showErreurMdp, setShowErreurMdp] = useState(false)
    const [showErreurCode, setShowErreurCode] = useState(false)
    const [showErreurVerif, setShowErreurVerif] = useState(false)
    const [showErreurCompte, setShowErreurCompte] = useState(false)
    
    const[listeEcole, setListeEcole] = useState(null)

    const [codeVerif, setCodeVerif] = useState(null)
    const [answerCode, setAnswerCode] = useState(null)

    const [isWaiting, setIsWaiting] = useState(false)
    const [isLoad, setIsLoad] = useState(false)

    const[name, setName] = useState(null)
    const[prename, setPrename] = useState(null)
    const[email, setMail] = useState("")
    const[motdePasse, setMdp] = useState(null)
    const[ecole, setEcole] = useState(null)


    const [messageErreurMdp, setMessageErreurMdp] = useState(null)


    const checkMail = (value) => {

        if(value.split("@").length == 2){
            setShowErreurMail(value.split("@")[1] !== "ac-academie.fr" || value === "")
            return (value.split("@")[1] === "ac-academie.fr") || true // Enelever le true plus tard
        }else {
            setShowErreurMail(value.split("@")[1] !== "ac-academie.fr" || value === "")
            return false
        }


    }

    const checkInfo = () => {

        setShowErreurNom(name == null)
        setShowErreurPrenom(prename == null)
        setShowErreurEcole(ecole == null)
        setShowErreurMdp(motdePasse == null)

        if(motdePasse === "" || motdePasse === null) setMessageErreurMdp("Champ manquant")


        return (name != null && prename != null && email != null && motdePasse != null && ecole != null)

    }

    const checkExist = async (value) => {
        setIsWaiting(true)

        let verif = false

        await axios.get(`${url}/comptes/${email}`)
            .then(response => {
                console.log(response.data.length)
                verif = (response.data.length === 0)
            })
            .catch(error => {
                console.log("Erreyur de la requète : ", error)
            })

 
        setIsWaiting(false)

        !verif ? setShowErreurCompte(true) : null

        return verif

    }

    const handleSendMail = async () => {

        console.log(checkInfo())


        if(checkInfo() && checkMail(email) && checkExist(email)) {

            
            const body = {
                mail : email
            }
            await axios.post(`${url}/sendMailVerif`, body)
            .then(response => {
                setCodeVerif(response.data)
                console.log('Réponse du serveur:', response.data);
            })
            .catch(error => {
            console.error('Erreur lors de la requête:', error);
            });

        }else {
            
            console.log("erreur")
        }

        

    }

    const handleCreateAdmin = async () => {

        setIsWaiting(true)

        const body = {
            nom : name.trim(), 
            prenom : prename.trim(), 
            mail : email.trim(), 
            mdp : bycrypt.hashSync(motdePasse, saltHash), 
            idEcole : ecole
        }

        await axios.post(`${url}/comptes/add`, body)
        .then(response => {
        console.log('Réponse du serveur:', response.data);
        })
        .catch(error => {
        console.error('Erreur lors de la requête:', error);
        })

        setIsWaiting(false)
        navigation.navigate('Log')
    }

    const handleChangeName = (value) => {
        setShowErreurNom(false)
        setName(value)
    }
    const handleChangePrenom = (value) => {
        setShowErreurPrenom(false)
        setPrename(value)
    }
    const handleChangeMail = (value) => {
        setMessageErreurMdp(null)
        setMail(value)
        checkMail(value)
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

    const handleCreateEcole = () => {
        navigation.navigate('Cre-Ecole')
    }

    const handleVerifCode = () => {
        console.log(codeVerif == answerCode)
        if(codeVerif == answerCode){
            console.log(codeVerif, answerCode)
            setShowErreurCode(false)
            handleCreateAdmin()
        }else {
            console.log(codeVerif, answerCode, "hey")
            setShowErreurCode(true)
        }

    }


    const loadData = async () => {
        
        setIsLoad(false)
        const response = await fetch(`${url}/ecole`)
        const data = await response.json()
        setListeEcole(data)
        setIsLoad(true)
    }





    return (
        
        <LinearGradient 
            colors={['#CDFFD8', '#94B9FF']} 
            style={styles.gradient} 
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}

        >   
            <ScrollView style={{width : "100%"}}>                




   

                <LinearGradient
                    colors={['#7ED957', '#FDD54F']} 
                    style={{zIndex : 999, top : 350,  width : 800, height : 800,  borderRadius : 500}}
                    >

                    
                </LinearGradient>

            {!isWaiting ? (!codeVerif ? 
                <View style={styles.container} onLayout={isLoad ? null : loadData}>
                    <Text style={styles.text}>Créer un compte</Text>
                    <Input mdp={null} text={'Nom'} placeholder={"Dupont"} value={name} setValue={handleChangeName} errorMessage={showErreurNom ? 'Champ manquant' : null}/>
                    <Input mdp={null} text={'Prénom'} placeholder={"Etienne"} value={prename} setValue={handleChangePrenom} errorMessage={showErreurPrenom ? 'Champ manquant' : null}/>
                    <Input mdp={null} text={'Email'} placeholder={"etienne.dupont@ac-academie.fr"} value={email} setValue={handleChangeMail} errorMessage={showErreurMail ? "Email au format '@ac-academie.fr' requis" : null}/>
                    <Input mdp={true} text={'Mot de passe'} placeholder={"***************"} value={motdePasse} setValue={(value) => {handleChangeMdp(value)}} errorMessage={showErreurMdp? messageErreurMdp : null}/>
                    {isLoad ? <DropDown type={"Ecole"} data={listeEcole} value={ecole} setValue={handleChangeEcole} labelField={'nom'} valueField={'idEcole'} placeholder={'Ecole primaire imaginaire'} errorMessage={showErreurEcole ? "Champ manquant" : null}/> : null}
                    <Text onPress={handleCreateEcole} style={{textAlign : 'center', fontWeight : '200'}}>Votre école n'est pas dans la liste ? Merci de lui créer un profile</Text>
                    <CustomButton disable={!(name != null && prename != null && email != null && motdePasse != null && ecole != null)} color={"#F6973D"} text={"S'inscrire"} textColor={"#fff"} width={"40%"} action={handleSendMail}/>
                    {showErreurCompte ? <Text style={{color : "#C80000", textAlign : 'center', fontSize : 14, fontWeight : '300'}}>{`Un compte avec le mail ${email} existe déja merci de vous connecter`}</Text> : null}
                </View>: 
                <View style={styles.container}>
                    <Input width={"40%"} mdp={null} keyboard={"number-pad"} text={"Code de vérification"} placeholder={"000000"} value={answerCode} setValue={setAnswerCode} errorMessage={showErreurCode ? "Erreur dans le code" :null}/>
                    <CustomButton color={"#F6973D"} text={"Valider"} textColor={"#fff"} width={"40%"} action={handleVerifCode}/>
                    <Pressable onPress={handleSendMail}>
                        <Text style={{fontWeight : '300'}}>Renvoyer le mail</Text>
                    </Pressable>
                    
                </View>):
                <View style={ {position :"absolute" , width : "100%", height : "100%",  display : 'flex', justifyContent: 'center', zIndex : 999}}>
                    <ActivityIndicator size={'large'} color={"#F6973D"}/>
                </View>
                

            }

            </ScrollView>
        </LinearGradient>
    )

}



const styles = StyleSheet.create({

    gradient : {
        
        paddingTop : '3%',
        display : 'flex',
        flexDirection : 'column',
        height : '100%',
        flexWrap :'wrap', 
    },

    navbar : {
        borderWidth : 1, 
        borderStyle : 'solid',
        flexGrow : 1,
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 

    footer : {
        flexGrow : 1,

        backgroundColor : '#EFE4E1'
    },
    image : {
        alignSelf : 'flex-start',
        width : 30,
        height : 30
    },

    container : {
        alignItems : 'center',
        alignSelf : 'center',
        height : "100%",
        position : "absolute",
        display : 'flex', 
        flexDirection : 'column',
        gap : 10, 
        zIndex : 999, 
        marginTop : "30%", 
        width : "90%"

    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : '400',
        fontSize : 30,

    }

})

/*
                
                {!codeVerif ? <TextInput style={styles.textInput} placeholder='Nom' onChangeText={value => handleChangeName(value)} value={name}/> : null}
                {showErreurNom ? <Text style={{color : "#f00", fontStyle: "italic"}}>Champ manquant</Text> : null}
                {!codeVerif ? <TextInput style={styles.textInput} placeholder='Prénom' onChangeText={value => handleChangePrenom(value)} value={prename}/> : null}
                {showErreurPrenom ? <Text style={{color : "#f00", fontStyle: "italic"}}>Champ manquant</Text> : null}
                {!codeVerif ? <TextInput style={styles.textInput} placeholder='Email' onChangeText={value =>  handleChangeMail(value)} value={email}/> : null}
                {showErreurMail ? <Text style={{color : "#f00", fontStyle: "italic"}}>Email au format '@ac-academie.fr' requis</Text> : null}
                {!codeVerif ? <TextInput style={styles.textInput} placeholder='Mot de passe' onChangeText={value => handleChangeMdp(value)} value={motdePasse}/> : null}
                {!codeVerif ? <Text style={{color : "#f00", fontWeight : messageErreurMdp == "Champ manquant" ? 'normal' : 'bold'}}>{messageErreurMdp}</Text> : null}
                {!codeVerif ? <Dropdown
                    data={data}
                    style={{
                        height : 30, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder='Choisir une école'
                    value={ecole}
                    onChange={item => {
                        handleChangeEcole(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                /> : null }
                {showErreurEcole ? <Text style={{color : "#f00", fontStyle: "italic"}}>Champ manquant</Text> : null}
                {!codeVerif ?
                    <Pressable onPress={handleCreateEcole}>
                        {!codeVerif ? <Text style={{fontStyle:'italic', fontSize : 10}}>Votre école n'est pas renseigné ? merci de lui créer un profile en cliquant sur cette phrase</Text> : null}
                    </Pressable> 
                : null }
                
                {!codeVerif ? <Button title='Créer le profil' onPress={handleSendMail}/> : null}
                {codeVerif ? <Text>Un mail avec un code vous a été envoyé</Text> : null}
                {codeVerif ? <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Code de vérification' onChangeText={value => handleVerifCode(value)}/> : null}
                {showErreurVerif ? <Text style={{color : "#f00", fontStyle: "italic"}}>Code faux</Text> : null}
                <ReturnPreviousScreen navigation={navigation}/>
*/