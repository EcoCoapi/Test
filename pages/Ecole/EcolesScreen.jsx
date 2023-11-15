import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Switch, Pressable, Image, ScrollView} from "react-native";
import NavBar from "../../component/NavBar";
import ReturnPreviousScreen from "../../component/ReturnPreviousScreen";
import Ecole from "../../component/Ecole";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../component/CustomButton";
import EcoleButton from "../../component/EcoleButton";
import { GlobalStateContext } from "../../global";
import ImageButton from "../../component/ImageButon";
import MarkerMap from "../../component/MarkerMap";

const CarteSource = '../../assets/carte.png'


export default function EcolesScreen({navigation}) {



    const {url, LISTE_DEPT} = useContext(GlobalStateContext)

    const [isEnabled, setIsEnabled] = useState(false)
    const [isFiltreHide, setFiltreHide] = useState(true)
    const [listeEcoles, setListeEcoles] = useState([])
    const [isLoad, setIsLoad] = useState(false);

    const [carteImageLoad, setCarteImageLoad] = useState(true)

    const [region, setRegion] = useState(null)

    const [sourceImage, setSourceImage] = useState(require(CarteSource))

    const [menuExtend, setMenuExtend] = useState(false)
    const [isMapActive, setMapActive] = useState(false)

   

    const [isShowDept, setIsShowDept] = useState(false)

    const handleSwitch = () => {
        setIsEnabled(!isEnabled)
    }

    const handleHideShowFiltre = () => {
        setFiltreHide(!isFiltreHide)
    }
    const handleHideShowMap = () => {
        setMapActive(!isMapActive)
        setSourceImage(require(CarteSource))
        setIsShowDept(false)
        setRegion(null)
    }
    
    const getDeptName = (num) => {

        let s

        LISTE_DEPT.map(item => {
            //console.log(`${parseInt(item.num_dep)} | ${num} | ${parseInt(item.num_dep) === num}`)
            if(parseInt(item.num_dep) === num){

                s = item.dep_name
            }
        })
        return s
    }

    const loadData = async () => {
        setIsLoad(false)

        const newList = listeEcoles
        const response = await fetch(`${url}/ecole`)
        const data = await response.json()
        
        setListeEcoles(data)
        setIsLoad(true)
    }




    const positionMarkerRegion = [
        {
            region : "Corse" ,
            top : "81%",
            left : "91%", 
            deptMarker : [{
                dept : 83, 
                top : "", 
                left : ""
            }]

        },
        {
            region : "Provence-Alpes-Côte d'Azur" ,
            top : "69%",
            left : "67%", 
            deptMarker : [
            {
                dept : 83, 
                top : "66%", 
                left : "55%"
            },
            {
                dept : 13, 
                top : "60%", 
                left : "10%"
            },
            {
                dept : 6, 
                top : "52%", 
                left : "73%"
            },
            {
                dept : 64, 
                top : "48%", 
                left : "45%"
            },
            {
                dept : 84, 
                top : "49%", 
                left : "25%"
            },
            {
                dept : 5, 
                top : "32%", 
                left : "50%"
            },
        
        ]
        },
        {
            region : "Occitanie" ,
            top : "70%",
            left : "49%", 
            deptMarker : [
            {
                dept : 30, 
                top : "44%", 
                left : "88%"
            },
            {
                dept : 48, 
                top : "35%", 
                left : "72.5%"
            },
            {
                dept : 12, 
                top : "38%", 
                left : "57%"
            },
            {
                dept : 46, 
                top : "32.5%", 
                left : "37%"
            },
            {
                dept : 82, 
                top : "42%", 
                left : "24%"
            },
            {
                dept : 32, 
                top : "49%", 
                left : "16%"
            },
            {
                dept : 65, 
                top : "61.5%", 
                left : "2%"
            },
            {
                dept : 31, 
                top : "52.5%", 
                left : "28%"
            },
            {
                dept : 9, 
                top : "62%", 
                left : "34%"
            },
            {
                dept : 66, 
                top : "68%", 
                left : "47%"
            },
            {
                dept : 11, 
                top : "60%", 
                left : "51%"
            },
            {
                dept : 11, 
                top : "60%", 
                left : "51%"
            },
            {
                dept : 81, 
                top : "48%", 
                left : "48%"
            },
            {
                dept : 34, 
                top : "52%", 
                left : "70%"
            },
        ]
        },
        {
            region : "Auvergne-Rhône-Alpes" ,
            top : "54%",
            left : "64%", 
            deptMarker : [
            {
                dept : 3, 
                top : "31%", 
                left : "22%"
            },
            {
                dept : 63, 
                top : "43%", 
                left : "17%"
            },
            {
                dept : 15, 
                top : "54%", 
                left : "12%"
            },
            {
                dept : 43, 
                top : "54.5%", 
                left : "30%"
            },
            {
                dept : 7, 
                top : "63%", 
                left : "43%"
            },
            {
                dept : 26, 
                top : "62%", 
                left : "58%"
            },
            {
                dept : 38, 
                top : "52.5%", 
                left : "67%"
            },
            {
                dept : 38, 
                top : "52.5%", 
                left : "67%"
            },
            {
                dept : 73, 
                top : "47.5%", 
                left : "83%"
            },
            {
                dept : 74, 
                top : "36.5%", 
                left : "78%"
            },
            {
                dept : 1, 
                top : "35%", 
                left : "57%"
            },
            {
                dept : 69, 
                top : "38.4%", 
                left : "47.5%"
            },
            {
                dept : 42, 
                top : "45%", 
                left : "37.5%"
            },
        ]
        },
        {
            region : "Bourgogne-Franche-Comté", 
            top : "42%",
            left : "58%", 
            deptMarker : [{
                dept : 83, 
                top : "", 
                left : ""
            }]
        },
        {
            region : "Grand Est", 
            top : "31%",
            left : "80%", 
            deptMarker : [{
                dept : 83, 
                top : "", 
                left : ""
            }]
        },
        {
            region : "Hauts-de-France", 
            top : "19%",
            left : "51%", 
            deptMarker : [
            {
                dept : 62, 
                top : "27%", 
                left : "19%"
            },
            {
                dept : 80, 
                top : "48%", 
                left : "27%"
            },
            {
                dept : 60, 
                top : "68%", 
                left : "32%"
            },
            {
                dept : 60, 
                top : "68%", 
                left : "32%"
            },
        ]
        },
        {
            region : "Île-de-France", 
            top : "31%",
            left : "55%", 
            deptMarker : [
            {
                dept : 86, 
                top : "", 
                left : ""
            },
        ]
        },
        {
            region : "Centre-Val de Loire", 
            top : "40%",
            left : "48%", 
            deptMarker : [{
                dept : 83, 
                top : "", 
                left : ""
            }]
        },
        {
            region : "Normandie", 
            top : "28.3%",
            left : "35%", 
            deptMarker : [
            {
                dept : 50, 
                top : "50%", 
                left : "15%"
            },
            {
                dept : 14, 
                top : "49%", 
                left : "41%"
            },
            {
                dept : 61, 
                top : "61%", 
                left : "52%"
            },
            {
                dept : 27, 
                top : "51%", 
                left : "75%"
            },
            {
                dept : 76, 
                top : "34%", 
                left : "72%"
            },
        ]
        },
        {
            region : "Bretagne", 
            top : "33.5%",
            left : "15%", 
            deptMarker : [
            {
                dept : 29, 
                top : "40%", 
                left : "27%"
            },
            {
                dept : 22, 
                top : "43%", 
                left : "50%"
            },
            {
                dept : 35, 
                top : "50%", 
                left : "78%"
            },
            {
                dept : 56, 
                top : "54%", 
                left : "50%"
            },
        ]
        },
        {
            region : "Nouvelle-Aquitaine", 
            top : "55%",
            left : "30%", 
            deptMarker : [
            {
                dept : 64, 
                top : "82%", 
                left : "13%"
            },
            {
                dept : 40, 
                top : "68%", 
                left : "22%"
            },
            {
                dept : 33, 
                top : "53%", 
                left : "28%"
            },
            {
                dept : 47, 
                top : "62%", 
                left : "43%"
            },
            {
                dept : 24, 
                top : "46%", 
                left : "55%"
            },
            {
                dept : 19, 
                top : "43%", 
                left : "79%"
            },
            {
                dept : 23, 
                top : "28%", 
                left : "84%"
            },
            {
                dept : 87, 
                top : "33%", 
                left : "63%"
            },
            {
                dept : 86, 
                top : "18%", 
                left : "53%"
            },
            {
                dept : 17, 
                top : "29%", 
                left : "17%"
            },
            {
                dept : 16, 
                top : "36%", 
                left : "45%"
            },
            {
                dept : 79, 
                top : "13%", 
                left : "32%"
            },
        ]
        },
        {
            region : "Pays de la Loire", 
            top : "41%",
            left : "20%", 
            deptMarker : [
            {
                dept : 85, 
                top : "69%", 
                left : "34%"
            },
            {
                dept : 44, 
                top : "46%", 
                left : "20%"
            },
            {
                dept : 49, 
                top : "49%", 
                left : "50%"
            },
            {
                dept : 72, 
                top : "34%", 
                left : "75%"
            },
            {
                dept : 53, 
                top : "30%", 
                left : "50%"
            },
        ]
        }
    ]


    const showDept = (region) => {
        setCarteImageLoad(false)
        

        switch(region.region) {

            
            case "Corse" :
                setSourceImage(require(`../../assets/Region/Corse/region.png`))
                break
            case 'Nouvelle-Aquitaine' :
                setSourceImage(require(`../../assets/Region/Nouvelle-Aquitaine/region.png`))
                break
            case 'Auvergne-Rhône-Alpes' :
                setSourceImage(require(`../../assets/Region/Auvergne-Rhône-Alpes/region.png`))
                break
            case 'Bourgogne-Franche-Comté' :
                setSourceImage(require(`../../assets/Region/Bourgogne-Franche-Comté/region.png`))
                break
            case 'Bretagne' :
                setSourceImage(require(`../../assets/Region/Bretagne/region.png`))
                break
            case 'Centre-Val de Loire' :
                setSourceImage(require('../../assets/Region/Centre-Val-de-Loire/region.png'))
                break
            case 'Grand Est' :
                setSourceImage(require('../../assets/Region/Grand-Est/region.png'))
                break
            case 'Hauts-de-France' :
                setSourceImage(require('../../assets/Region/Hauts-de-France/region.png'))
                break
            case 'Île-de-France' :
                setSourceImage(require('../../assets/Region/Île-de-France/region.png'))
                break
            case 'Normandie' :
                setSourceImage(require('../../assets/Region/Normandie/region.png'))
                break
            case 'Occitanie' :
                setSourceImage(require('../../assets/Region/Occitanie/region.png'))
                break
            case 'Pays de la Loire' :
                setSourceImage(require('../../assets/Region/Pays-de-la-Loire/region.png'))
                break
            case `Provence-Alpes-Côte d'Azur` :
                setSourceImage(require(`../../assets/Region/Provence-Alpes-Côte-d'Azur/region.png`))
                break
                
            
        }

        setIsShowDept(true)
        setRegion(region)

        setCarteImageLoad(true)
        

    }

    const handleGoCarte = () => {
        setSourceImage(require(CarteSource))
        setRegion(null)
        setIsShowDept(false)
    }

    const getNbEcoleRegion = (region) => {

        let n = 0;

        listeEcoles.map(ecole => {
            ecole.region == region ? n++: null
        })

        return n


    }

    const getNbEcoleDept = (dept) => {

        let n = 0;

        listeEcoles.map(ecole => {
            ecole.dept == dept ? n++: null
        })

        return n


    }



    return (

        <LinearGradient
            colors={['#8C52FF', '#5CE1E6']} 
            style={styles.gradient} 
            start={{x : 0, y:0.5}}
            end={{x:1, y:0.5}}
            locations={[0.1, 0.9]}
            
    >   
        <View style={styles.navbar}>
            <ReturnPreviousScreen titre='Ecoles' navigation={navigation} enable/>
        </View>
        <LinearGradient
                    colors={['#7ED957', '#FDD54F']} 
                    style={{position :'absolute', top : 350,  width : 800, height : 800,  borderRadius : 500}}
                    >

                    
                </LinearGradient>

        
        
        
        {isMapActive ? 
            <View style={{padding : "3%"}}>
                <Text style={{color : "#fff", textAlign : 'center', alignSelf : 'center',  position : 'absolute', fontWeight : '500', fontStyle : "italic", fontSize : 20}}>{region ? region.region : 'Carte de France'}</Text>
                <Image style={{height : 500,  width : "100%", resizeMode : 'contain'}} source={carteImageLoad ? sourceImage : null}/> 
                {!isShowDept ?
                    positionMarkerRegion.map((region, index) => getNbEcoleRegion(region.region) != 0 || true? <MarkerMap lieu={region.region} action={() => showDept(region)} key={index} top={region.top} left={region.left} nb={getNbEcoleRegion(region.region)}/> : null)
                    : 
                    positionMarkerRegion.map(r=> region.region === r.region ? r.deptMarker.map((dept, index) => <MarkerMap lieu={getDeptName(dept.dept)} key={index} left={dept.left} top={dept.top} nb={getNbEcoleDept(dept.dept)}/>) : null)
                }

            </View>:
            
        <ScrollView onLayout={isLoad ? null : loadData} style={{marginBottom : "25%",  display : 'flex', flexDirection:'column', width : "100%", padding : "2%"}}>

            
            
            {
                isLoad ? 
                listeEcoles.map((ecole, index) => <EcoleButton nom={ecole.nom} ville={ecole.ville} key={index} num={[ecole.idEcole, index]}/>) :
                null
            }

        </ScrollView>
        }
        <View style={{ margin : "2%", height : "6%", alignItems : 'center', width :'100%'}}>
            {/*<CustomButton width={"80%"} height="100%" textColor='#fff' text={"Suivant"} color={"#527721"}/>*/}
        

        </View>
        <View style={[styles.footer, {height : !isFiltreHide ? "45%" : "15%"}]}>
                    {isFiltreHide ? <ImageButton bgColor="#F4F4F4" action={handleHideShowMap} source={isMapActive ? require('../../assets/Ecole/liste.png'): require('../../assets/Ecole/carte.png')} text={isMapActive ? "Liste" : "Map"} color={"#f00"}/> : null}
                    {!isMapActive ? 
                        <ImageButton bgColor="#F4F4F4" action={handleHideShowFiltre} source={isFiltreHide ? require('../../assets/Ecole/loupe.png') : require('../../assets/downArrow.png')} text={!isFiltreHide ? "Cacher les filtres" : "Afficher les filtres"} color={"#f00"}/> 
                        : 
                        isShowDept ? <ImageButton bgColor={"#F4F4F4"} source={require("../../assets/retour.png")} text={"Carte de France"} color={'#f00'} action={handleGoCarte}/> : null
                        }

        </View>

        </LinearGradient>

        /*
        <View onLayout={loadData}>
            <NavBar navigation={navigation} screenName={'Ecoles Screen'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{isEnabled ? 'Map' : 'Liste'} des écoles</Text>
                <View style={styles.toggle}>
                    <Text>Liste</Text>
                    <Switch value={isEnabled} onChange={handleSwitch}/>
                    <Text>Map</Text>
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
                */
    )


}

const styles = StyleSheet.create({
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
        flexDirection :'row',
    },

    gradient : {
        
        paddingTop : '3%',
        display : 'flex',
        flexDirection : 'column',
        height : '100%', 
    },

    navbar : {
        alignItems : 'center',
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
        height : '10%',
        margin : '2%'
    }, 

    image : {
        alignSelf : 'flex-start',
        width : 30,
        height : 30
    },

    container : {
        borderWidth : 1, 
        borderStyle : 'solid',
        display : 'flex', 
        flexDirection : 'column',
        width : "90%",
        height : "100%", 
        flex : 1, 
        gap : 10, 
        zIndex : 999, 
        alignItems : 'center',
        padding : "2%", 
        alignSelf  :'center'
    }, 

    button : {
        width : 150
    },
    text :{
        fontWeight : 'bold',
        fontSize : 40,
    }

})