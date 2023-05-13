import React from 'react'
import { View,Text, TouchableOpacity,Image } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
const UnlockBanner = () => {
  return (
    <View className="px-4 py-2">
    <TouchableOpacity className="h-14 bg-white rounded-lg">
    <View className="flex flex-row h-full items-center justify-center">
     <Text 
     style={{fontFamily : "SPOTFONT"}}
     className="font-semibold px-4">
    Unlock Premium
     </Text>

     <Text>

    <MaterialCommunityIcons name="crown-outline" size={24} color="gold" />
     </Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default UnlockBanner