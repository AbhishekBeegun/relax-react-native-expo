import React, {useState} from 'react';
import { View,Text,TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";


const SearchBar = () => {

  const router = useRouter()

  const [SearchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    router.push(`/search-query/${SearchQuery}`);  
  }

  return (
    <>
    
    <View className="flex flex-row items-center justify-between px-8 h-14 rounded-xl bg-white">
    
    <View className="w-2/3">
    <TextInput
    style={{fontFamily : "SPOTFONT"}}
    className="py-2 text-black"
    value={SearchQuery}
    onChangeText={(SearchQuery) => setSearchQuery(SearchQuery)}
    placeholder={'Search'}
    />
    </View>

    <TouchableOpacity onPress={ () => handleSearch()}>
    <Ionicons name="search" size={25} color="black" />
    </TouchableOpacity>
    

    </View>

    <View className="py-4 flex flex-row justify-evenly">

      <TouchableOpacity 
      onPress={() => router.push("/search-query/Rain")}
      className ="py-2 bg-black px-4 rounded-2xl items-center">
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-white">Rain</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => router.push("/search-query/Sleep")}
      className ="py-2 bg-black px-4 rounded-2xl items-center">
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-white">Sleep</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => router.push("/search-query/Live")}
      className ="py-2 bg-black px-4 rounded-2xl items-center">
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-white">Live</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => router.push("/search-query/Jay")}
      className ="py-2 bg-black px-4 rounded-2xl items-center">
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-white">Jay</Text>
      </TouchableOpacity>

    </View>

    </>
  )
}

export default SearchBar