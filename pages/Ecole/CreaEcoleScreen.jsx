import React, { useContext, useState } from "react";
import { View , Text, StyleSheet, TextInput, Button, ScrollView} from "react-native";
import NavBar from "../../component/NavBar";
import { Dropdown } from "react-native-element-dropdown";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../component/Input";
import DropDown from "../../component/DropDown";
import CustomButton from "../../component/CustomButton";
import { GlobalStateContext } from "../../global";
import axios from "axios";

export default function CreaEcole ({navigation}) {

    const {LISTE_DEPT, url, listeType} = useContext(GlobalStateContext)

    const [nom, setNom] = useState(null)
    const [ville, setVille] = useState(null)

    const [nbBus, setNbBus] = useState(null)
    const [nbVelo, setNbVelo] = useState(null)
    const [nbPiste, setNbPiste] = useState(null)
    const [region, setRegion] = useState(null)



    const [dept, setDept] = useState(null);
    const [type, setType] = useState(null);

    const getRegion = () => {

        let region

        LISTE_DEPT.map(item => {
            if(item.num_dep == dept) {
                console.log("sqdfg")
                region = item.region_name
            }
        })

        return region
    }


    const handleCreateEcole = async () => {
        //Fonction pour ajouter une école dans la BDD


        const body = {
            nom : nom, 
            ville : ville, 
            departement : dept, 
            region : getRegion(), 
            nbClasse : 0,
            nbBus : nbBus, 
            nbPisteCylclable : nbPiste, 
            nbStationVelo : nbVelo, 
            type : type


        }

        await axios.post(`${url}/ecole`, body)
        .then(response => {
            console.log(response.data)
            navigation.navigate("First")
        })
        .catch(error => {
            console.log(error)
        })


        
        
        //navigation.navigate('Home')
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
            <View style={styles.container}>
                <Text style={styles.text}>Créer un profile école</Text>
                <Input placeholder={"Ecole élementaire d'Aytré"} text={"Nom"} mdp={null} value={nom} setValue={setNom} />
                <Input placeholder={"Aytré"} text={"Ville"} mdp={null} value={ville} setValue={setVille} />
                <DropDown placeholder={"Gironde"} data={LISTE_DEPT} labelField={'dep_name'} valueField={'num_dep'} value={dept} setValue={setDept} type={'Département'} />
                <Input placeholder={"0"} text={"Nombre de ligne de bus"} keyboard="number-pad" mdp={null} value={nbBus} setValue={setNbBus} />
                <Input placeholder={"0"} text={"Nombre de station de vélo"} keyboard="number-pad" mdp={null} value={nbVelo} setValue={setNbVelo} />
                <Input placeholder={"0"} text={"Nombre de piste cyclable"} keyboard="number-pad" mdp={null} value={nbPiste} setValue={setNbPiste} />
                <DropDown data={listeType} labelField={'label'} valueField={'value'} placeholder={"Urbaine"} setValue={setType} value={type} type={"Type d'école"}/>
                <CustomButton disable={!(dept != null && nom != null && ville != null && nbBus != null && nbPiste != null && nbVelo != null && type != null)} color={"#F6973D"} text={"S'inscrire"} textColor={"#fff"} width={"40%"} action={handleCreateEcole}/>
            </View>

  
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
        <View>
            <NavBar navigation={navigation} screenName={'Cre-Ecole Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>Création d'un profile école</Text>
                <TextInput style={styles.textInput} placeholder="Nom" />
                <TextInput style={styles.textInput} placeholder="Ville" />
                <Dropdown
                    data={listeDept}
                    style={{
                        height : 50, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder='Département'
                    value={dept}
                    onChange={item => {
                        setDept(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />
                <TextInput style={styles.textInput} placeholder="Nombre de lignes de BUS" />
                <TextInput style={styles.textInput} placeholder="Nombre de piste cyclable" />
                <TextInput style={styles.textInput} placeholder="Nombre de station de vélo" />
                <Dropdown
                    data={listeType}
                    style={{
                        height : 50, 
                        width : "100%",
                        backgroundColor : '#fff', 
                        borderWidth : 2, 
                        borderStyle : 'solid'
                    }}
                    placeholder={`Type d'école`}
                    value={type}
                    onChange={item => {
                        setType(item.value)
                    }}
                    labelField='label'
                    valueField='value'
                
                />
                
                <Button onPress={handleCreateEcole} title="Créer le profile école"/>
                <ReturnPreviousScreen navigation={navigation}/>
            </View>
        </View>
        */