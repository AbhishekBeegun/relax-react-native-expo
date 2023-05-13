import React from 'react'
import { View ,Image,Text } from "react-native";
import SearchBar from "../Search/SearchBar";
import FeaturedCat from "./FeaturedCat";

const SearchFeaturedCat = () => {
  return (

    <View
    className="h-[70vh] flex flex-col justify-between pt-2 bg-[#121212]">
    <Image
     resizeMode="cover"      
     className="h-full absolute top-0 w-full"
     source={{ uri : "https://wallpaper.dog/large/987756.jpg"}} />
    
    <View className="py-4">
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-white text-3xl font-semibold text-center">Relax</Text>        
    </View>


    <View className="px-2">
    <SearchBar />
    </View>
    
    <View className="pb-2">
    <FeaturedCat />
    </View>
    </View>
    

  )
}

export default SearchFeaturedCat