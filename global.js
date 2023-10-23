import React, {createContext, useState} from "react";

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {

    const [currentDoc, setCurrentDoc] = useState(null)
    const [currentEcole, setCurrentEcole] = useState(null)
    const [currentClasse, setCurrentClasse] = useState(null)
    const [currentChallenge, setCurrentChallenge] = useState(null)
    const [currentSeance, setCurrentSeance] = useState(null)
    const [currentSeanceEco, setCurrentSeanceEco] = useState(null)
    const [currentChallengeEco, setCurrentChallengeEco] = useState(null)
    const [currentGroupeChallengeEco, setCurrentGroupeChallengeEco] = useState(null)

    const [isAdmin, setAdmin] = useState(true)



    return (
        <GlobalStateContext.Provider
            value={
                {
                    currentChallengeEco, setCurrentChallengeEco,
                    currentGroupeChallengeEco, setCurrentGroupeChallengeEco,
                    currentSeance, setCurrentSeance,
                    currentSeanceEco, setCurrentSeanceEco,
                    currentChallenge, setCurrentChallenge, 
                    currentClasse, setCurrentClasse,
                    currentEcole, setCurrentEcole, 
                    currentDoc, setCurrentDoc, 
                    isAdmin , setAdmin
                }
            }
        >
            {children}
        </GlobalStateContext.Provider>
    )

}