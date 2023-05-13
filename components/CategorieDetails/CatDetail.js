import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import Card from "../../components/Cards/Card"
import { View,Text,ActivityIndicator } from "react-native"
import { FlatList } from "react-native"

import {getCategoriePosts } from "../../lib/client"


const CatDetail = ({paramsid}) => {

  const [Data, setData] = useState(null)

  useEffect(() => {
    getCategoriePosts(paramsid).then((data) => setData(data))
    .then(console.log(Data))
    .catch(console.error)     

  }, [])
  

  return (
    <View className="py-16 bg-[#121212]">

      {Data ? 
      <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin:6 }}>
              <Card
              title={item.title}
              image={item.mainImage} 
              />              
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        :
        <View className="h-[100vh] w-screen flex flex-row justify-center items-center">       
        <ActivityIndicator size={50} color={"white"}>
        </ActivityIndicator>
        </View> }
    </View>
  )
}

export default CatDetail