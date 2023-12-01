import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import NavBar from './component/NavBar';
import LogScreen from './pages/Account/LogScreen';
import SignScreen from './pages/Account/SignScreen.jsx';
import AdminScreen from './pages/Account/AdminScreen';
import DocsScreen from './pages/Document/DocsScreen';
import DocScreen from './pages/Document/DocScreen';
import { GlobalStateProvider } from './global';
import EcolesScreen from './pages/Ecole/EcolesScreen';
import CreaEcole from './pages/Ecole/CreaEcoleScreen';
import EcoleScreen from './pages/Ecole/EcoleScreen';
import EditEcole from './pages/Ecole/EditEcoleScreen';
import AddClasseScreen from './pages/Classe/AddClasseScreen';
import ClasseScreen from './pages/Classe/ClasseScreen';
import EditClasseScreen from './pages/Classe/EditClasseScreen';
import ChallengeClasseScreen from './pages/Challenge/ChallengeClasseScreen';
import AddChallengeScreen from './pages/Challenge/AddChallengeScreen';
import EditChallengeScreen from './pages/Challenge/EditChallengeScreen';
import ChallengeEcoScreen from './pages/ChallengeEco/ChallengeEcoScreen';
import GroupeChallengeEcoScreen from './pages/ChallengeEco/GroupeChallengeEcoScreen';
import AddGroupeCHallengeEcoScreen from './pages/ChallengeEco/AddGroupeChallengeEcoScreen';
import AddGroupeChallengeEcoScreen from './pages/ChallengeEco/AddGroupeChallengeEcoScreen';
import EditGroupeChallengeEcoScreen from './pages/ChallengeEco/EditGroupeChallengeEcoScreen';
import AddSeanceEcoScreen from './pages/SeanceEco/AddSeanceEcoScreen';
import SeanceEcoScreen from './pages/SeanceEco/SeanceEcoScreen';
import EditSeanceEcoScreen from './pages/SeanceEco/EditSeanceEcoScreen';
import AddSeanceScreen from './pages/Seance/AddSeanceScreen';
import SeanceScreen from './pages/Seance/SeanceScreen';
import EditSeanceScreen from './pages/Seance/EditSeanceScreen';
import ChallengesScreen from './pages/Challenge/ChallengesScreen';
import ChallengeScreen from './pages/Challenge/ChallengeScreen';
import InscrireChallenge from './pages/Challenge/InscrireChallengeScreen';
import FirstScreen from './pages/Account/FirstScreen';
import EditAdminScreen from './pages/Account/EditAdminScreen';
import GroupeclasseScreen from './pages/Classe/GroupeClasseScreen.jsx';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GlobalStateProvider>
          <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="First" 
          component={FirstScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen 
          name="Log" 
          component={LogScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Sign" 
          component={SignScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Admin" 
          component={EditAdminScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Docs" 
          component={DocsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Doc" 
          component={DocScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Ecoles" 
          component={EcolesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Ecole" 
          component={EcoleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Cre-Ecole" 
          component={CreaEcole}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Ecole" 
          component={EditEcole}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Add-Classe" 
          component={AddClasseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Classe" 
          component={ClasseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Classe" 
          component={EditClasseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ChallengeClasse" 
          component={ChallengeClasseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Add-Challenge" 
          component={AddChallengeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Challenge" 
          component={EditChallengeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Challenge-ECO" 
          component={ChallengeEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Groupe-Challenge-Eco" 
          component={GroupeChallengeEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Add-Groupe-Challenge-Eco" 
          component={AddGroupeChallengeEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Groupe-Eco" 
          component={EditGroupeChallengeEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Add-Seance-Eco" 
          component={AddSeanceEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Seance-Eco" 
          component={SeanceEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Seance-Eco" 
          component={EditSeanceEcoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Add-Seance" 
          component={AddSeanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Edit-Seance" 
          component={EditSeanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Seance" 
          component={SeanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Challenges" 
          component={ChallengesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Challenge" 
          component={ChallengeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Inscription-Challenge" 
          component={InscrireChallenge}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Groupe-Classe" 
          component={GroupeclasseScreen}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </GlobalStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
