import React, {useState} from 'react';

import { View,Text,TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';
const SearchBar = () => {

  const [SearchQuery, setSearchQuery] = useState();

  return (
    <View className="flex flex-row items-center h-14 rounded-lg border-b">
    
    <View className="flex flex-col justify-center items-center">
    <Text className="px-8">

    <Ionicons name="search" size={24} color="black" />
    </Text>
    </View>
   
    <TextInput
    className="w-full py-2"
    value={SearchQuery}
    onChangeText={(SearchQuery) => setSearchQuery(SearchQuery)}
    placeholder={'Search programs'}
    />
    

    </View>
  )
}

export default SearchBar