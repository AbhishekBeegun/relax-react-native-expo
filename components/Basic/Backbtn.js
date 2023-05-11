import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Backbtn = () => {

    const router = useRouter()

    function goBack(){
        router.back()
    }
  return (
    <TouchableOpacity 
    className="pr-8"
    onPress={() => goBack()}>
     <Ionicons name="arrow-back-circle-sharp" size={35} color="black" /> 
    </TouchableOpacity>
  )
}

export default Backbtn