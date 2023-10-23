import React from 'react'
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'

export default function NavBar({navigation, screenName}){


    const handleGoHome = () => {
        navigation.navigate('Home')
    }

    const handleGoProfile = () => {
        //Ajouter la vérif de connection 
        navigation.navigate('Log')
    }

    return (

        <View style={styles.container}>
            <Pressable onPress={handleGoHome}>
                <Image 
                    style={styles.image}
                    source={require('../assets/home.png')}
                    on
                />
            </Pressable>

            <Text>{screenName}</Text>
            <Pressable onPress={handleGoProfile}>
                <Image 
                    style={styles.image}
                    source={require('../assets/user.png')}
                    on
                />
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

    image : {
        
        width : 30,
        height : 30
    }
})