import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList, Switch, Text } from "react-native";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import CustomButton from "../../component/CustomButton";
import ImageButton from "../../component/ImageButon";
import Input from './../../component/Input';
import { GlobalStateContext } from "../../global";
import axios from "axios";
import Groupe from "../../component/Groupe";
import SwitchText from "../../component/SwitchText";



export default function GroupeclasseScreen({navigation}){

    const {isAdmin, currentClasse, url, currentUser, setCurrentGroupeChallengeEco, currentGroupeChallengeEco} = useContext(GlobalStateContext)


    const [isFiltreHide, setIsFiltreHide] = useState(true)

    const [nomFiltre, setNomFiltre] = useState("")

    const [myGroupeFiltre, setMyGroupeFiltre] = useState(false)
    const [priveFiltre, setPriveFiltre] = useState(false)

    const [addGroupe, setGroupeAdd] = useState(false)

    const [nomGroupe, setNomGroupe] = useState(null)
    const [mdp, setMdp] = useState(null)
    const [privacy, setPrivacy] = useState(false)
    const [wantJoinGroupe, setWantJoinGroupe] = useState(false)

    const [mdpGroupe, setMdpGroupe] = useState(null)
    const [errorMessageMdp, setErrorMessageMdp] = useState(null)
    const [errorMessageNom, setErrorMessageNom] = useState(null)

    const [listGroupe, setListGroupe] = useState(null)
    const [listeGroupeOg, setLiseGroupeOg] = useState(null)
    const [isLoad, setIsLoad] = useState(false)



    


    const load = async () => {

        console.log(currentClasse)

        const response = await fetch(`${url}/groupe`)
        const data = await response.json()

        if(isAdmin) {
            !isLoad ? setListGroupe(data) : null
            setLiseGroupeOg(data)

        }else {
            const l = []
            data.map(g => {
                g.isPublic == 1 && verifIsInClasse(g) ? l.push(g) : null
            })
            setLiseGroupeOg(l)
            !isLoad ? setListGroupe(l) : null

        }
        
        setIsLoad(true)





    }

    const verifIsInClasse = (groupe) => {
        let verif = false

        console.log(currentClasse.idClasse)
        groupe.listeClasse.slice(0, -1).split("|").map(c => {
            c == currentClasse.idClasse ? verif = true : null
        })


        return verif
    }



    const handleAddGroupe = () => {
        setIsFiltreHide(!isFiltreHide)
        setGroupeAdd(true)

    }

    const handleCreateGroupe = async () => {


      

        const body = {
            "classe" : `${currentClasse.idClasse}|`, 
            "nom" : nomGroupe, 
            "isPublic" : privacy ? 0 : 1,
            "motDePasse" : mdp
        }

        
        await axios.post(`${url}/groupe`, body)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

        setGroupeAdd(false)

        

        
    }

    useEffect(() => {
        const newList = []

        console.log(nomFiltre)
    
        {isLoad ? listeGroupeOg.map(groupe => {
            (nomFiltre != "" ? groupe.nom.includes(nomFiltre) : true) && 
            (priveFiltre === true ? groupe.isPublic == 0 : true) &&
            (myGroupeFiltre === true ? verifIsInClasse(groupe) : true)
                

            
            ? newList.push(groupe) : null
        }) : null}




        setListGroupe(newList)

    }, [nomFiltre, priveFiltre, myGroupeFiltre])


    const handleClickGroupe = (g) => {
        setIsFiltreHide(true)
        
        if(verifIsInClasse(g)) {
            setCurrentGroupeChallengeEco(g)
            navigation.navigate("Groupe-Challenge-Eco")
        }else {
            setCurrentGroupeChallengeEco(g)
            setWantJoinGroupe(true)
        }

        
       

    }

    const handleJoinGroupe = async () => {
        if(currentGroupeChallengeEco.isPublic == 1){
            const body = {
                idClasse : currentClasse.idClasse, 
                listeClasse : currentGroupeChallengeEco.listeClasse
            }

            await axios.put(`${url}/groupe/classe/add/${currentGroupeChallengeEco.idGroupe}`, body)
            .then(async (result)  => {
                console.log(result)
                const reponse = await fetch(`${url}/groupe/${currentGroupeChallengeEco.idGroupe}`)
                const data = await reponse.json()
                setCurrentGroupeChallengeEco(data[0])
                navigation.navigate("Groupe-Challenge-Eco")
            })
            .catch(error => console.log(error))
            


        }else {

            if(currentGroupeChallengeEco.motDePasse == mdpGroupe) {
                
                setErrorMessageMdp(null)
                const body = {
                    idClasse : currentClasse.idClasse, 
                    listeClasse : currentGroupeChallengeEco.listeClasse
                }

                await axios.put(`${url}/groupe/classe/add/${currentGroupeChallengeEco.idGroupe}`, body)
                .then( async (result) => {
                    console.log(result)
                    const reponse = await fetch(`${url}/groupe/${currentGroupeChallengeEco.idGroupe}`)
                    const data = await reponse.json()
                    setCurrentGroupeChallengeEco(data[0])
                    navigation.navigate("Groupe-Challenge-Eco")
                })
                .catch(error => console.log(error))
                

            }else {
                setErrorMessageMdp("Mot de passe incorrect")
            }


        }

    }

    /*
    useEffect(() => {

        setNomFiltre(null)
        setMyGroupeFiltre(false)

        const newList = []

    
        {isLoad  && priveFiltre === true ? listGroupe.map(groupe => {
            groupe.isPublic == 0 ? newList.push(groupe) : null
        }) : null}



        priveFiltre === true ? setListGroupe(newList) : setListGroupe(listeGroupeOg)



    }, [priveFiltre])

    useEffect(() => {

        setPriveFiltre(false)
        setNomFiltre(null)

        const newList = []

    
        {isLoad  && myGroupeFiltre === true ? listGroupe.map(groupe => {
            groupe.listeClasse.slice(0, -1).split("|").map(c => {
                c === currentUser.id_classe ? newList.push(groupe) : null
            })
        }) : null}



        myGroupeFiltre === true ? setListGroupe(newList) : setListGroupe(listeGroupeOg)



    }, [myGroupeFiltre])


*/


    return (

        <LinearGradient
            colors={['#5DE0E6', '#004AAD']} 
            style={styles.gradient}
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}

        >

        <View style={styles.navbar} onLayout={load}>
            <ReturnPreviousScreen enable titre={'Groupe classe'} />
        </View>
        {!addGroupe ?

        !wantJoinGroupe ?
        
            <View style={styles.container}            >

                <FlatList
                    style={{width : "100%", display : 'flex', flexDirection : 'column', gap : 10, height : isFiltreHide ? "70%" : "40%", backgroundColor : "#E8E8E8", borderWidth : 2, borderRadius : 8, borderStyle : 'solid'}}
                    data={isLoad ? listGroupe : null}
                    renderItem={({item}) => {
                        return <Groupe groupe={item} owner={isAdmin ? verifIsInClasse(item) : false} action={() => handleClickGroupe(item)}/>
                    }
                }/>
            </View> 
            
            : 
            <View style={styles.container}>
                <Groupe disable groupe={currentGroupeChallengeEco} owner={false} action={() => null}/>
                {currentGroupeChallengeEco.isPublic == 0 ? <Input  setValue={setMdpGroupe} value={mdpGroupe} text={"Mot de passe"} placeholder={"**************"}/> : null}
                <CustomButton color={"#004F7C"} text={"Rejoindre le groupe"} textColor={"#fff"} width={"50%"} action={handleJoinGroupe}/>


            </View>
        : 
        <SafeAreaView style={styles.container}>
            <Input text={"Nom du groupe"}errorMessage={errorMessageNom} value={nomGroupe} setValue={setNomGroupe} placeholder={"Groupe gironde"} mdp={null}/>
            <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around'}}>
                <Text>{privacy ? "Privé" : "Public"}</Text>
                <Switch value={privacy} onChange={() => setPrivacy(!privacy)}/>
                {privacy ? <Input text={"Mot de passe"} value={mdp} setValue={setMdp} placeholder={"***********"}  width={"50%"}/> : null}
            </View>

            
        </SafeAreaView>
        }

        <View style={[styles.footer, {height : !isFiltreHide ? "45%" : "15%", flexDirection :  isFiltreHide? 'row' : 'column', gap : isFiltreHide ? 45 : 5}]}>
                    
            {addGroupe ? <View>
                <ImageButton source={require('../../assets/verifier.png')} bgColor="#F4F4F4" action={nomGroupe ? handleCreateGroupe : () => {
                    console.log("hey")
                    setErrorMessageNom("Veuillez entrer un nom valide")}}/>
            </View> : null}
        

                    {!isFiltreHide ? 
                        <Input placeholder={"Groupe gironde"}  width={"80%"} value={nomFiltre} setValue={setNomFiltre} text={"Nom du Groupe"} mdp={null} />
                        : 
                        null
                    }
                    {!isFiltreHide ? 
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 50}}>
                        {isAdmin ? <SwitchText value={myGroupeFiltre} setValue={setMyGroupeFiltre} titre={"Mes groupes"}/> : null}
                        {isAdmin ?<SwitchText value={priveFiltre} setValue={setPriveFiltre} titre={"Privé"}/> : null} 
                    </View>
                    
                    : null}
                    
                    { !addGroupe ? 
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 50}}>
                        {!wantJoinGroupe ? 
                        <ImageButton source={!isFiltreHide ? require('../../assets/downArrow.png') : require('../../assets/Ecole/loupe.png')} bgColor="#F4F4F4" action={() => setIsFiltreHide(!isFiltreHide)}/> 
                        : 
                        <ImageButton source={require('../../assets/annuler.png')} bgColor="#F4F4F4" action={() => setWantJoinGroupe(false)}/>
                        }
                        {isAdmin && !isFiltreHide ? <ImageButton source={require('../../assets/plus.png')} bgColor="#F4F4F4" action={handleAddGroupe}/>:
                    null
                    }
                    </View> 
                    : 
                    <ImageButton source={require('../../assets/annuler.png')} bgColor="#F4F4F4" action={() => setGroupeAdd(false)}/>}
                    

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
        height : "100%", 
        gap : 15,
        alignItems : 'center' 
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
    footer : {
        position : 'absolute', 
        alignItems : 'center',
        justifyContent : 'center', 
        gap : 45,
        bottom : 0, 
        width : "100%",
        borderTopLeftRadius : 13,
        borderTopRightRadius : 13,

        display : 'flex', 

    },
    text :{

        fontWeight : 'bold',
        fontSize : 20,
        color : "#fff", 
        opacity : 0.8
    }
})