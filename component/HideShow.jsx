import React from "react";
import { useState } from "react";
import { Image, Pressable } from "react-native";

const HideSource = "../assets/LoginScreen/hide.png"
const ViewSource = "../assets/LoginScreen/view.png"

export default function HideShow({state, setState}){

    const [source, setSource] = useState(null)

    const load = () => {
        state ? setSource(require(HideSource)) :  setSource(require(ViewSource))
    }

    const changeState = () => {
        state ? setSource(require(ViewSource)) :  setSource(require(HideSource))
        setState(!state)
        
    }

    return (
        <Pressable onLayout={load} onPress={changeState}>
            <Image style={{width : 22, height : 22}}source={source} width={15} height={15}/>
        </Pressable>
    )



}